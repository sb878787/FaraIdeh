'use server';

import { headers } from 'next/headers';
import { z } from 'zod';
import { prisma } from '@/libs/prisma';
import { checkSubmissionRateLimit, recordSubmission } from '@/libs/rateLimit';

// Valid category ids (must match services in SelectCategory.tsx)
const VALID_CATEGORIES = [
  'website',
  'application',
  'startup',
  'instagram',
  'uiux',
  'content',
] as const;

// Convert Persian/Arabic digits to English digits
function normalizeDigits(input: string): string {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
  return input.replace(/[۰-۹٠-٩]/g, (d) => {
    const persianIndex = persianDigits.indexOf(d);
    if (persianIndex !== -1) return String(persianIndex);
    const arabicIndex = arabicDigits.indexOf(d);
    if (arabicIndex !== -1) return String(arabicIndex);
    return d;
  });
}

const userSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'نام باید حداقل ۲ حرف باشد')
    .max(50, 'نام نباید بیشتر از ۵۰ حرف باشد')
    .regex(/^[a-zA-Zآ-ی\s]+$/, 'نام فقط باید شامل حروف باشد'),

  lastName: z
    .string()
    .trim()
    .min(2, 'نام خانوادگی باید حداقل ۲ حرف باشد')
    .max(50, 'نام خانوادگی نباید بیشتر از ۵۰ حرف باشد')
    .regex(/^[a-zA-Zآ-ی\s]+$/, 'نام خانوادگی فقط باید شامل حروف باشد'),

  contactNumber: z
    .string()
    .trim()
    .transform((val) => normalizeDigits(val).replace(/\D/g, ''))
    .refine((val) => /^09\d{9}$/.test(val), {
      message: 'شماره تماس معتبر نیست (باید با 09 شروع شود و ۱۱ رقم باشد)',
    }),

  email: z.string().trim().email('ایمیل معتبر نیست').optional().or(z.literal('')),
});

const createOrderSchema = z.object({
  categories: z.array(z.enum(VALID_CATEGORIES)).min(1, 'لطفا حداقل یک دسته را انتخاب کنید'),

  users: z.array(userSchema).min(1, 'لطفا اطلاعات کاربر را وارد کنید'),

  description: z
    .string()
    .trim()
    .min(10, 'توضیحات باید حداقل ۱۰ کاراکتر باشد')
    .max(2000, 'توضیحات نباید بیشتر از ۲۰۰۰ کاراکتر باشد'),

  // Honeypot field: real users never fill this in, bots often do
  website: z.string().max(0, 'درخواست نامعتبر است').optional(),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;

/** Extracts the client IP from forwarded headers (works on Vercel). */
async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return headersList.get('x-real-ip') ?? 'unknown';
}

export async function createOrder(data: unknown) {
  try {
    const ip = await getClientIp();

    const rateCheck = checkSubmissionRateLimit(ip);
    if (!rateCheck.allowed) {
      return {
        success: false,
        error: rateCheck.message,
      };
    }

    const parsed = createOrderSchema.safeParse(data);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return {
        success: false,
        error: firstError?.message || 'اطلاعات وارد شده معتبر نیست',
      };
    }

    // Silently reject bot submissions (honeypot filled) without revealing why
    if (parsed.data.website) {
      return {
        success: true,
        message: 'سفارش شما با موفقیت ثبت شد',
      };
    }

    const { categories, users, description } = parsed.data;

    const order = await prisma.order.create({
      data: {
        category: JSON.parse(JSON.stringify(categories)),
        users: JSON.parse(JSON.stringify(users)),
        description,
      },
    });

    recordSubmission(ip);

    return {
      success: true,
      message: 'سفارش شما با موفقیت ثبت شد',
      orderId: order.id,
    };
  } catch (error) {
    console.error('Error creating order:', error);
    return {
      success: false,
      error: 'خطایی در ثبت سفارش رخ داد. لطفا دوباره تلاش کنید',
    };
  }
}

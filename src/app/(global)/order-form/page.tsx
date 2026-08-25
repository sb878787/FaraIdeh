// Components
import OrderFormPageWrapper from '@/views/global/order-form/OrderFormPage';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// Libs
import { SITE_URL } from '@/libs/siteConfig';

// Types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ثبت سفارش',
  description:
    'در فراایده می‌توانید سفارش توسعه نرم‌افزار، طراحی محصول یا راهکارهای استارتاپی خود را ثبت کنید. تیم متخصص ما آماده همکاری در اجرای پروژه‌های نوآورانه است.',
  openGraph: {
    title: 'ثبت سفارش | فراایده',
    description:
      'در فراایده می‌توانید سفارش توسعه نرم‌افزار، طراحی محصول یا راهکارهای استارتاپی خود را ثبت کنید. تیم متخصص ما آماده همکاری در اجرای پروژه‌های نوآورانه است.',
    url: '/order-form',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/order-form',
  },
};

const OrderFormPage = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'خانه', url: SITE_URL },
          { name: 'ثبت سفارش', url: `${SITE_URL}/order-form` },
        ]}
      />
      <OrderFormPageWrapper />
    </>
  );
};

export default OrderFormPage;

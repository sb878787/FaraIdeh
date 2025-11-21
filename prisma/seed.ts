import { prisma } from '../src/lib/prisma';
import bcryptjs from 'bcryptjs';

async function main() {
  console.log('Start seeding ...');

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { username: 'MohammadAliSaberi87_Developer' },
  });

  if (existingUser) {
    console.log('User already exists');
    return;
  }

  // Hash password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash('M1387@$1387a', salt);

  // Create user
  const user = await prisma.user.create({
    data: {
      username: 'MohammadAliSaberi87_Developer',
      email: 'm.sb87.developer@gmail.com',
      fullName: 'سید محمد علی صابری',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
    },
  });

  console.log(`Created user with id: ${user.id}`);
  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

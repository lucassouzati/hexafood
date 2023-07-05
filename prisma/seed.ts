// https://www.prisma.io/docs/guides/migrate/seed-database

import { PrismaClient } from '@prisma/client';
import { seedCategorias } from './seeders/categorias';
import { seedProdutos } from './seeders/produtos';
const prisma = new PrismaClient();

async function main() {
  await seedCategorias(prisma);
  await seedProdutos(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

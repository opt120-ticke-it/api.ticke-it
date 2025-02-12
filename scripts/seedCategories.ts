import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'Festa' },
    { name: 'Show' },
    { name: 'Workshop' },
    { name: 'Palestra' },
    { name: 'Concerto' },
    { name: 'Teatro' },
    { name: 'Exposição' },
    { name: 'Feira' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    });
  }

  console.log('Categorias adicionadas com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
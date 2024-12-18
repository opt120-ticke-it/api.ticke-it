import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/hash';

const prisma = new PrismaClient();

async function main() {
  const password = await hashPassword('senha123');
  const user = await prisma.user.upsert({
    where: { email: 'teste@example.com' },
    update: {},
    create: {
      name: 'userTeste',
      email: 'teste@example.com',
      password: password,
    },
  });

  const events = [
    {
      name: 'festa1',
      description: 'Descrição do evento festa1',
      startDate: new Date('2025-01-01T20:00:00.000Z'),
      endDate: new Date('2025-01-02T02:00:00.000Z'),
      location: 'Localização de festa1',
      organizerId: user.id,
      categoryId: 1, // Substitua pelo ID da categoria apropriada
    },
    {
      name: 'festa2',
      description: 'Descrição do evento festa2',
      startDate: new Date('2025-02-01T20:00:00.000Z'),
      endDate: new Date('2025-02-02T02:00:00.000Z'),
      location: 'Localização de festa2',
      organizerId: user.id,
      categoryId: 1, // Substitua pelo ID da categoria apropriada
    },
    {
      name: 'show1',
      description: 'Descrição do evento show1',
      startDate: new Date('2025-03-01T20:00:00.000Z'),
      endDate: new Date('2025-03-02T02:00:00.000Z'),
      location: 'Localização de show1',
      organizerId: user.id,
      categoryId: 2, // Substitua pelo ID da categoria apropriada
    },
    {
      name: 'show2',
      description: 'Descrição do evento show2',
      startDate: new Date('2025-04-01T20:00:00.000Z'),
      endDate: new Date('2025-04-02T02:00:00.000Z'),
      location: 'Localização de show2',
      organizerId: user.id,
      categoryId: 2, // Substitua pelo ID da categoria apropriada
    },
  ];

  for (const event of events) {
    await prisma.event.create({
      data: event,
    });
  }

  console.log('Usuário e eventos adicionados com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

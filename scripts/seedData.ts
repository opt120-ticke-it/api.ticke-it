import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/hash';

const prisma = new PrismaClient();

async function main() {
  const usersData = [
    {
      name: 'userTeste1',
      email: 'teste1@example.com',
      password: await hashPassword('senha123'),
      cpf: '123.456.789-01',
      birthDate: new Date('1990-01-01'),
      gender: 'Masculino',
    },
    {
      name: 'userTeste2',
      email: 'teste2@example.com',
      password: await hashPassword('senha123'),
      cpf: '123.456.789-02',
      birthDate: new Date('1991-02-02'),
      gender: 'Feminino',
    },
    {
      name: 'userTeste3',
      email: 'teste3@example.com',
      password: await hashPassword('senha123'),
      cpf: '123.456.789-03',
      birthDate: new Date('1992-03-03'),
      gender: 'Masculino',
    },
    {
      name: 'userTeste4',
      email: 'teste4@example.com',
      password: await hashPassword('senha123'),
      cpf: '123.456.789-04',
      birthDate: new Date('1993-04-04'),
      gender: 'Feminino',
    },
  ];

  const users = [];
  for (const userData of usersData) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
    users.push(user);
  }

  const eventsData = [
    {
      name: 'festa1',
      description: 'Descrição do evento festa1',
      startDate: new Date('2025-01-01T20:00:00.000Z'),
      endDate: new Date('2025-01-02T02:00:00.000Z'),
      location: 'Localização de festa1',
      organizerId: users[0].id,
      categoryId: 1, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        { type: '4x3', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem vermelha
        { type: '16x9', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem azul
      ],
    },
    {
      name: 'festa2',
      description: 'Descrição do evento festa2',
      startDate: new Date('2025-02-01T20:00:00.000Z'),
      endDate: new Date('2025-02-02T02:00:00.000Z'),
      location: 'Localização de festa2',
      organizerId: users[1].id,
      categoryId: 1, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        { type: '4x3', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem verde
        { type: '16x9', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem amarela
      ],
    },
    {
      name: 'show1',
      description: 'Descrição do evento show1',
      startDate: new Date('2025-03-01T20:00:00.000Z'),
      endDate: new Date('2025-03-02T02:00:00.000Z'),
      location: 'Localização de show1',
      organizerId: users[2].id,
      categoryId: 2, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        { type: '4x3', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem roxa
        { type: '16x9', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem laranja
      ],
    },
    {
      name: 'show2',
      description: 'Descrição do evento show2',
      startDate: new Date('2025-04-01T20:00:00.000Z'),
      endDate: new Date('2025-04-02T02:00:00.000Z'),
      location: 'Localização de show2',
      organizerId: users[3].id,
      categoryId: 2, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        { type: '4x3', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem cinza
        { type: '16x9', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem preta
      ],
    },
    {
      name: 'workshop1',
      description: 'Descrição do evento workshop1',
      startDate: new Date('2025-05-01T20:00:00.000Z'),
      endDate: new Date('2025-05-01T22:00:00.000Z'),
      location: 'Localização de workshop1',
      organizerId: users[0].id,
      categoryId: 3, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        { type: '4x3', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem branca
        { type: '16x9', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem azul clara
      ],
    },
    {
      name: 'palestra1',
      description: 'Descrição do evento palestra1',
      startDate: new Date('2025-06-01T20:00:00.000Z'),
      endDate: new Date('2025-06-01T22:00:00.000Z'),
      location: 'Localização de palestra1',
      organizerId: users[1].id,
      categoryId: 4, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        { type: '4x3', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem rosa
        { type: '16x9', base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1JlcwAAAABJRU5ErkJggg==' }, // Imagem marrom
      ],
    },
  ];

  for (const eventData of eventsData) {
    const { ticketTypes, images, ...eventDetails } = eventData;

    const event = await prisma.event.create({
      data: eventDetails,
    });

    for (const ticketType of ticketTypes) {
      await prisma.ticketType.create({
        data: {
          ...ticketType,
          eventId: event.id,
          availableQuantity: ticketType.totalQuantity,
        },
      });
    }

    for (const image of images) {
      await prisma.image.create({
        data: {
          ...image,
          eventId: event.id,
        },
      });
    }
  }

  console.log('Usuários, eventos, tipos de ingressos e imagens adicionados com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/hash';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function getImageBase64(filePath: string) {
  return fs.readFileSync(filePath, { encoding: 'base64' });
}

async function main() {
  const usersData = [
    {
      name: 'João Silva',
      email: 'joao.silva@example.com',
      password: await hashPassword('senhaSuperSegura!'),
      cpf: '123.456.789-00',
      birthDate: new Date('1985-05-15'),
      gender: 'Masculino',
    },
    {
      name: 'Maria Souza',
      email: 'maria.souza@example.com',
      password: await hashPassword('senhaSuperSegura!'),
      cpf: '987.654.321-00',
      birthDate: new Date('1990-09-10'),
      gender: 'Feminino',
    },
    {
      name: 'Carlos Pereira',
      email: 'carlos.pereira@example.com',
      password: await hashPassword('senhaSuperSegura!'),
      cpf: '456.789.123-00',
      birthDate: new Date('1978-11-20'),
      gender: 'Masculino',
    },
    {
      name: 'Ana Oliveira',
      email: 'ana.oliveira@example.com',
      password: await hashPassword('senhaSuperSegura!'),
      cpf: '321.654.987-00',
      birthDate: new Date('1995-03-05'),
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
      name: 'Opera Queen Tributo',
      description:
        'Um show imperdível homenageando a icônica banda Queen, produzido por João Tadeu.',
      startDate: new Date('2025-10-15T20:00:00.000Z'),
      endDate: new Date('2025-10-16T02:00:00.000Z'),
      location: 'Teatro Real',
      organizerId: users[0].id,
      categoryId: 1, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        {
          type: '4x3',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/4x3',
              'noite-lua-cheia-4x3.jpg'
            )
          ),
        },
        {
          type: '16x9',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/16x9',
              'noite-lua-cheia-16x9.jpg'
            )
          ),
        },
      ],
    },
    {
      name: 'Stand-Up Comedy: Burrice Artificial',
      description:
        'Um show de stand-up comedy irreverente com Diogo Portugal, abordando temas do cotidiano com muito humor.',
      startDate: new Date('2025-09-10T21:00:00.000Z'),
      endDate: new Date('2025-09-10T23:00:00.000Z'),
      location: 'Marte Hall, São Paulo',
      organizerId: users[1].id,
      categoryId: 2,
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 80, totalQuantity: 200 },
        { name: 'Ingresso VIP', price: 150, totalQuantity: 50 },
      ],
      images: [
        {
          type: '4x3',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/4x3',
              'diogo-portugal-4x3.jpg'
            )
          ),
        },
        {
          type: '16x9',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/16x9',
              'diogo-portugal-16x9.jpg'
            )
          ),
        },
      ],
    },
    {
      name: 'Gravação do Especial Dihh Lopes',
      description:
        'Prepare-se para uma noite de muito humor com Dihh Lopes gravando seu novo especial!',
      startDate: new Date('2025-03-15T21:00:00.000Z'),
      endDate: new Date('2025-03-16T00:00:00.000Z'),
      location: 'Teatro Santo Agostinho',
      organizerId: users[0].id,
      categoryId: 3, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 80, totalQuantity: 200 },
        { name: 'Ingresso VIP', price: 120, totalQuantity: 50 },
      ],
      images: [
        {
          type: '4x3',
          base64: getImageBase64(
            path.join(__dirname, '..', 'images/event/4x3', 'dihh-lopes-4x3.jpg')
          ),
        },
        {
          type: '16x9',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/16x9',
              'dihh-lopes-16x9.jpg'
            )
          ),
        },
      ],
    },
    {
      name: 'Afonso Padilha - Temporada 2025',
      description:
        'Ano novo, texto novo! Toda quinta-feira de fevereiro, Afonso Padilha traz seu humor inconfundível ao Marte Hall.',
      startDate: new Date('2025-02-06T21:00:00.000Z'),
      endDate: new Date('2025-02-07T00:00:00.000Z'),
      location: 'Marte Hall, São Paulo',
      organizerId: users[0].id,
      categoryId: 3, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        {
          type: '4x3',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/4x3',
              'afonso-padilha-4x3.jpg'
            )
          ),
        },
        {
          type: '16x9',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/16x9',
              'afonso-padilha-16x9.jpg'
            )
          ),
        },
      ],
    },
    {
      name: 'Thiago Arancam – Projeto Seis e Meia 30 Anos',
      description:
        'Um show imperdível com o tenor Thiago Arancam, celebrando 30 anos do Projeto Seis e Meia. Prepare-se para uma noite de música e emoção no Teatro Paulo Pontes.',
      startDate: new Date('2025-03-13T18:30:00.000Z'),
      endDate: new Date('2025-03-13T21:30:00.000Z'),
      location: 'Teatro Paulo Pontes',
      organizerId: users[0].id,
      categoryId: 5, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        {
          type: '4x3',
          base64: getImageBase64(
            path.join(__dirname, '..', 'images/event/4x3', 'seis-meia-4x3.jpg')
          ),
        },
        {
          type: '16x9',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/16x9',
              'seis-meia-16x9.jpg'
            )
          ),
        },
      ],
    },
    {
      name: 'Stand-Up de Humor – Igor Guimarães',
      description:
        'Prepare-se para gargalhar com o humor irreverente de Igor Guimarães no Teatro Santo Agostinho!',
      startDate: new Date('2025-02-21T21:00:00.000Z'),
      endDate: new Date('2025-02-21T23:00:00.000Z'),
      location: 'Teatro Santo Agostinho',
      organizerId: users[0].id,
      categoryId: 5, // Substitua pelo ID da categoria apropriada
      ticketTypes: [
        { name: 'Ingresso Padrão', price: 100, totalQuantity: 100 },
        { name: 'Ingresso VIP', price: 200, totalQuantity: 50 },
      ],
      images: [
        {
          type: '4x3',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/4x3',
              'igor-guimaraes-4x3.jpg'
            )
          ),
        },
        {
          type: '16x9',
          base64: getImageBase64(
            path.join(
              __dirname,
              '..',
              'images/event/16x9',
              'igor-guimaraes-16x9.jpg'
            )
          ),
        },
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

  console.log(
    'Usuários, eventos, tipos de ingressos e imagens adicionados com sucesso.'
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

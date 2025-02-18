import prisma from '../../../config/prisma';
import { IUpdateEvent } from '../event.validation';
import CreateTicketTypesService from '../../ticketTypes/services/CreateTicketTypes.service';

class UpdateEventService {
  async execute(data: IUpdateEvent) {
    if (data.startDate! > data.endDate!) {
      throw new Error('A data de início não pode ser maior que a data de término');
    }

    const event = await prisma.event.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        location: data.location,
        organizerId: data.organizerId,
        categoryId: data.categoryId,
      },
    });

    // Atualizar imagens
    if (data.image4x3) {
      await prisma.image.upsert({
        where: {
          eventId_type: {
            eventId: data.id,
            type: '4x3',
          },
        },
        update: {
          base64: data.image4x3,
        },
        create: {
          eventId: data.id,
          type: '4x3',
          base64: data.image4x3,
        },
      });
    }

    if (data.image16x9) {
      await prisma.image.upsert({
        where: {
          eventId_type: {
            eventId: data.id,
            type: '16x9',
          },
        },
        update: {
          base64: data.image16x9,
        },
        create: {
          eventId: data.id,
          type: '16x9',
          base64: data.image16x9,
        },
      });
    }

    // Adicionar novos tipos de ingressos
    if (data.ticketTypes) {
      for (const ticketType of data.ticketTypes) {
        const existingTicketType = await prisma.ticketType.findFirst({
          where: {
            eventId: event.id,
            name: ticketType.name,
          },
        });

        if (!existingTicketType) {
          await CreateTicketTypesService.execute({
            name: ticketType.name,
            eventId: event.id,
            totalQuantity: ticketType.totalQuantity,
            price: ticketType.price,
          });
        }
      }
    }

    return event;
  }
}

export default new UpdateEventService();
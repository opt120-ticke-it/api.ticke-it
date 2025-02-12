import prisma from '../../../config/prisma';
import CreateTicketTypesService from '../../ticketTypes/services/CreateTicketTypes.service';
import { ICreateEvent } from '../event.validation';

class CreateEventService {
  async execute(data: ICreateEvent) {
    if (new Date(data.startDate) > new Date(data.endDate)) {
      throw new Error('A data de início não pode ser maior que a data de término');
    }

    const event = await prisma.event.create({
      data: {
        name: data.name,
        description: data.description,
        startDate: new Date(data.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
        location: data.location,
        organizerId: data.organizerId,
        categoryId: data.categoryId,
      },
    });

    if (data.ticketTypes) {
      for (const ticketType of data.ticketTypes) {
        await CreateTicketTypesService.execute({
          name: ticketType.name,
          eventId: event.id,
          totalQuantity: ticketType.totalQuantity,
          price: ticketType.price,
        });
      }
    }

    if (data.image4x3) {
      await prisma.image.create({
        data: {
          eventId: event.id,
          type: '4x3',
          base64: data.image4x3,
        },
      });
    }

    if (data.image16x9) {
      await prisma.image.create({
        data: {
          eventId: event.id,
          type: '16x9',
          base64: data.image16x9,
        },
      });
    }

    return event;
  }
}

export default new CreateEventService();
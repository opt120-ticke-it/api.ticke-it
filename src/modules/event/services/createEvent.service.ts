import prisma from '../../../config/prisma';
import CreateTicketTypesService from '../../ticketTypes/services/CreateTicketTypes.service';
import { ICreateEvent } from '../event.validation';

class CreateEventService {
  async execute(data: ICreateEvent) {
    if (data.startDate > data.endDate) {
      throw new Error(
        'A data de início não pode ser maior que a data de término'
      );
    }

    const event = await prisma.event.create({
      data: {
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        location: data.location,
        name: data.name,
        organizerId: data.organizerId,
        categoryId: data.categoryId,
      },
    });

    if (data.ticketTypes) {
      data.ticketTypes.map((ticketType) => {
        CreateTicketTypesService.execute({
          name: ticketType.name,
          eventId: event.id,
          totalQuantity: ticketType.totalQuantity,
          price: ticketType.price,
        });
      });
    }

    return event;
  }
}

export default new CreateEventService();

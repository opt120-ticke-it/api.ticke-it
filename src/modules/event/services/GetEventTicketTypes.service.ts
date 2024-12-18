import prisma from '../../../config/prisma';
import { IGetEventTicketTypes } from '../event.validation';

class GetEventTicketTypesService {
  async execute(data: IGetEventTicketTypes) {
    const event = await prisma.event.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!event) throw new Error('Evento não encontrado');

    const ticketTypes = await prisma.ticketType.findMany({
      where: {
        eventId: data.id,
      },
    });

    return ticketTypes;
  }
}

export default new GetEventTicketTypesService();

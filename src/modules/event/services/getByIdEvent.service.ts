import prisma from '../../../config/prisma';
import { IGetByIdEvent } from '../event.validation';

class GetByIdEventService {
  async execute(data: IGetByIdEvent) {
    const event = await prisma.event.findUnique({
      where: {
        id: data.id,
      },
      include: {
        ticketTypes: true,
        images: true,
      },
    });

    if (!event) {
      throw new Error('Evento não encontrado');
    }

    return event;
  }
}

export default new GetByIdEventService();
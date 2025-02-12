import prisma from '../../../config/prisma';
import { IGetByIdUser } from '../user.validation';

class GetUserEventsService {
  async execute(data: IGetByIdUser) {
    const userEvents = await prisma.event.findMany({
      where: {
        organizerId: data.id,
      },
      include: {
        ticketTypes: true,
        images: true,
      },
    });

    return userEvents;
  }
}

export default new GetUserEventsService();
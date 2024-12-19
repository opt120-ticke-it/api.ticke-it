import prisma from '../../../config/prisma';
import { IGetByIdUser } from '../user.validation';

class GetUserEventsService {
  async execute(data: IGetByIdUser) {
    const userEvents = await prisma.user.findUnique({
      where: {
        id: data.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        organizedEvents: {
          include: {
            ticketTypes: true,
          },
        },
      },
    });

    if (!userEvents) {
      throw new Error('Usuário não encontrado');
    }

    return userEvents;
  }
}

export default new GetUserEventsService();

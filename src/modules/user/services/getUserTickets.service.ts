import prisma from '../../../config/prisma';
import { IGetByIdUser } from '../user.validation';

class GetUserTicketsService {
  async execute(data: IGetByIdUser) {
    const userEvents = await prisma.ticket.findMany({
      where: {
        userId: data.id,
      },
      include: {
        event: true,
        ticketType: true,          
    },
    });

    return userEvents;
  }
}

export default new GetUserTicketsService();
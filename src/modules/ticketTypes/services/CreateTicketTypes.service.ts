import prisma from '../../../config/prisma';
import { ICreateTicketTypes } from '../ticketTypes.types';

class CreateTicketTypeService {
  async execute(data: ICreateTicketTypes) {
    const prevTicketType = await prisma.ticketType.findFirst({
      where: {
        name: data.name,
        eventId: data.eventId,
      },
    });

    if (prevTicketType) {
      throw new Error('Tipo de ingresso já cadastrado');
    }

    return prisma.ticketType.create({
      data: {
        ...data,
        availableQuantity: data.totalQuantity,
      },
    });
  }
}

export default new CreateTicketTypeService();

import prisma from '../../../config/prisma';
import { IAddTicketQuantity } from '../ticketTypes.types';

class AddQuantityTicketTypesService {
  async execute(data: IAddTicketQuantity) {
    const ticketType = await prisma.ticketType.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!ticketType) throw new Error('Ingresso não encontrado');

    return await prisma.ticketType.update({
      where: {
        id: data.id,
      },
      data: {
        totalQuantity: ticketType.totalQuantity + data.quantity,
        availableQuantity: ticketType.availableQuantity + data.quantity,
      },
    });
  }
}

export default new AddQuantityTicketTypesService();

import prisma from '../../../config/prisma';
import {
  IAddTicketQuantity,
  IRemoveTicketQuantity,
} from '../ticketTypes.types';

class RemoveQuantityTicketTypesService {
  async execute(data: IRemoveTicketQuantity) {
    const ticketType = await prisma.ticketType.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!ticketType) throw new Error('Ingresso não encontrado');

    if (ticketType.availableQuantity - data.quantity < 0) {
      throw new Error(
        'Não é possivel remover mais ingressos do que a quantidade disponível'
      );
    }

    if (ticketType.totalQuantity - data.quantity < 0) {
      throw new Error(
        'Não é possivel remover mais ingressos do que a quantidade total'
      );
    }

    return await prisma.ticketType.update({
      where: {
        id: data.id,
      },
      data: {
        totalQuantity: ticketType.totalQuantity - data.quantity,
        availableQuantity: ticketType.availableQuantity - data.quantity,
      },
    });
  }
}

export default new RemoveQuantityTicketTypesService();

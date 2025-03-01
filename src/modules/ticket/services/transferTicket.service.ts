import prisma from '../../../config/prisma';
import { ITransferTicket } from '../ticket.validation';

export default class TransferTicketService {
  async execute({ originUserId, destinationUserId, ticketId }: ITransferTicket) {
    const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

    if (!ticket) {
      throw new Error('Ticket não encontrado.');
    }

    if (ticket.userId !== originUserId) {
      throw new Error('Usuário não possui este ticket.');
    }

    if (ticket.validated) {
      throw new Error('Ticket já foi validado e não pode ser transferido.');
    }

    if (originUserId === destinationUserId) {
      throw new Error('Você não pode transferir o ticket para você mesmo.');
    }

    const transfer = await prisma.transfer.create({
      data: {
        originUserId,
        destinationUserId,
        ticketId,
        transferDate: new Date(),
      },
    });

    await prisma.ticket.update({
      where: { id: ticketId },
      data: { userId: destinationUserId },
    });

    if (ticket.orderId !== null) {
      await prisma.order.update({
        where: { id: ticket.orderId },
        data: { userId: destinationUserId },
      });
    }

    return transfer;
  }
}

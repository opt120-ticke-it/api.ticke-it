import prisma from '../../../config/prisma';
import { ICreateTicket } from '../ticket.validation';
import { v4 as uuidv4 } from 'uuid';

class CreateTicketService {
  async execute(data: ICreateTicket) {
    const ticketType = await prisma.ticketType.findUnique({
      where: { id: data.ticketTypeId },
    });

    if (!ticketType || ticketType.availableQuantity <= 0) {
      throw new Error('Tipo de ingresso indisponível');
    }

    let qrCode;
    let existingTicket;
    do {
      qrCode = uuidv4();
      existingTicket = await prisma.ticket.findUnique({
        where: { qrCode },
      });
    } while (existingTicket);

    const ticket = await prisma.ticket.create({
      data: {
        userId: data.userId,
        eventId: data.eventId,
        ticketTypeId: data.ticketTypeId,
        qrCode,
        validated: false,
      },
    });

    await prisma.ticketType.update({
      where: { id: data.ticketTypeId },
      data: {
        availableQuantity: ticketType.availableQuantity - 1,
      },
    });

    return ticket;
  }
}

export default new CreateTicketService();
import prisma from '../../../config/prisma';
import { IValidateTicket } from '../ticket.validation';

class ValidateTicketServiceV1 {
  async execute(data: IValidateTicket): Promise<any> {
    const ticketExists = await prisma.ticket.findFirst({
      where: {
        qrCode: data.ticketCode,
        eventId: data.eventId,
      },
    });

    if (!ticketExists) {
      throw new Error(
        'Este ticket pode não existir ou não pertencer a este evento'
      );
    }

    await prisma.ticket.update({
      where: {
        id: ticketExists.id,
      },
      data: {
        validated: true,
        validatedAt: new Date(),
        validatedBy: data.validatorId,
      },
    });

    return ticketExists;
  }
}

export default ValidateTicketServiceV1;

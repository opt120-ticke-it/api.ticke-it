import { Request, Response } from 'express';
import { TransferTicketSchema } from './ticket.validation';
import TransferTicketService from './services/transferTicket.service';
import { validateTicket } from './ticket.validation';
import ValidateTicketServiceV1 from './services/validateTicket.service';

export const transfer = async (req: Request, res: Response) => {
  const transferTicketService = new TransferTicketService();

  try {

    const data = TransferTicketSchema.parse(req.body);

    const { ticketId, originUserId, destinationUserId } = data;


    if (isNaN(ticketId)) {
      return res.status(400).json({ message: 'ID do ticket inválido' });
    }

    const response = await transferTicketService.execute({
      ticketId,
      originUserId,
      destinationUserId,
    });

    return res.status(200).json(response);
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

export const validate = async (req: Request, res: Response) => {
  const validateTicketServiceV1 = new ValidateTicketServiceV1();

  try {
    const data = validateTicket.parse(req.body);

    const response = await validateTicketServiceV1.execute(data);

    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

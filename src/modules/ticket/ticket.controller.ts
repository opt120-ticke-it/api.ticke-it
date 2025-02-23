import { Request, Response } from 'express';
import { validateTicket, CreateTicketSchema } from './ticket.validation';
import ValidateTicketServiceV1 from './services/validateTicket.service';
import CreateTicketService from './services/createTicket.service';
import { TransferTicketSchema } from './ticket.validation';
import TransferTicketService from './services/transferTicket.service';
import { updateTicketStatus } from "./services/updateTicketStatus.service";
class TicketController {
  async validate(req: Request, res: Response) {
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

  async create(req: Request, res: Response) {
    try {
      const data = CreateTicketSchema.parse(req.body);
      const ticket = await CreateTicketService.execute(data);
      return res.status(201).json(ticket);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}

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

export default new TicketController();

export const updateTicketController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "O status é obrigatório" });
  }

  try {
    const updatedTicket = await updateTicketStatus(id, status);
    return res.status(200).json(updatedTicket);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar ticket", error });
  }
};

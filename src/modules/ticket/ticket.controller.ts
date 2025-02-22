import { Request, Response } from 'express';
import { validateTicket, CreateTicketSchema } from './ticket.validation';
import ValidateTicketServiceV1 from './services/validateTicket.service';
import CreateTicketService from './services/createTicket.service';

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

export default new TicketController();

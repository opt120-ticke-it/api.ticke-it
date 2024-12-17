import CreateTicketTypesService from './services/CreateTicketTypes.service';
import { CreateTicketTypesSchema } from './ticketTypes.types';
import { Request, Response } from 'express';

class TicketTypesController {
  async create(req: Request, res: Response) {
    try {
      const data = CreateTicketTypesSchema.parse(req.body);

      const response = await CreateTicketTypesService.execute(data);

      return res.status(201).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}

export default new TicketTypesController();

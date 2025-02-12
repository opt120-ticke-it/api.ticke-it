import AddQuantityTicketTypesService from './services/AddQuantityTicketTypes.service';
import CreateTicketTypesService from './services/CreateTicketTypes.service';
import GetByIdTicketTypeService from './services/GetByIdTicketType.service';
import RemoveQuantityTicketTypesService from './services/RemoveQuantityTicketTypes.service';
import {
  AddTicketQuantitySchema,
  CreateTicketTypesSchema,
  GetByIdTicketTypeSchema,
  RemoveTicketQuantitySchema,
} from './ticketTypes.types';
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

  async getById(req: Request, res: Response) {
    try {
      const data = GetByIdTicketTypeSchema.parse(req.params);

      const response = await GetByIdTicketTypeService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async addQuantity(req: Request, res: Response) {
    try {
      const data = AddTicketQuantitySchema.parse(req.body);

      const response = await AddQuantityTicketTypesService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async removeQuantity(req: Request, res: Response) {
    try {
      const data = RemoveTicketQuantitySchema.parse(req.body);

      const response = await RemoveQuantityTicketTypesService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}

export default new TicketTypesController();

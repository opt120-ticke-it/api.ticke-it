import { Request, Response } from 'express';
import {
  CreateEventSchema,
  GetAllEventsSchema,
  GetByIdEventSchema,
  GetEventTicketTypesSchema,
  UpdateEventSchema,
} from './event.validation';
import CreateEventService from './services/createEvent.service';
import updateEventService from './services/updateEvent.service';
import getAllEventService from './services/getAllEvent.service';
import getByIdEventService from './services/getByIdEvent.service';
import GetEventTicketTypesService from './services/GetEventTicketTypes.service';

class EventController {
  async create(req: Request, res: Response) {
    try {
      const data = CreateEventSchema.parse(req.body);

      const response = await CreateEventService.execute(data);

      return res.status(201).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = UpdateEventSchema.parse({ ...req.body, id: req.params.id });

      const response = await updateEventService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async list(req: Request, res: Response) {
    try {
      const params = GetAllEventsSchema.parse(req.query);

      const response = await getAllEventService.execute(params);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const data = GetByIdEventSchema.parse(req.params);

      const response = await getByIdEventService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async getTicketTypes(req: Request, res: Response) {
    try {
      const data = GetEventTicketTypesSchema.parse(req.params);

      const response = await GetEventTicketTypesService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async updateImage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const file = req.file;

      return res.status(200).json({ id, file });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}

export default new EventController();

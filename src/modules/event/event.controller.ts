import { Request, Response } from 'express';
import { CreateEventSchema } from './event.validation';
import CreateEventService from './services/createEvent.service';

class EventController {
  async create(req: Request, res: Response) {
    try {
      const data = CreateEventSchema.parse(req.body);

      const response = await CreateEventService.execute(data);

      return res.status(201).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new EventController();

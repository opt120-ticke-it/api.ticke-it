import primsa from '../../../config/prisma';
import { ICreateEvent } from '../event.validation';

class CreateEventService {
  async execute(data: ICreateEvent) {
    const res = primsa.event.create({
      data: {
        ...data,
      },
    });

    return res;
  }
}

export default new CreateEventService();

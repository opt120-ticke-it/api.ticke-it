import primsa from '../../../config/prisma';
import { ICreateEvent } from '../event.validation';

class CreateEventService {
  async execute(data: ICreateEvent) {
    if (data.startDate > data.endDate) {
      throw new Error(
        'A data de início não pode ser maior que a data de término'
      );
    }

    const res = primsa.event.create({
      data: {
        ...data,
      },
    });

    return res;
  }
}

export default new CreateEventService();

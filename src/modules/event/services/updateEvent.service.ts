import primsa from '../../../config/prisma';
import { IUpdateEvent } from '../event.validation';

class UpdateEventService {
  async execute(data: IUpdateEvent) {
    if (data.startDate! > data.endDate!) {
      throw new Error(
        'A data de início não pode ser maior que a data de término'
      );
    }

    const res = primsa.event.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });

    return res;
  }
}

export default new UpdateEventService();

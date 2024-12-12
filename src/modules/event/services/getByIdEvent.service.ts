import primsa from '../../../config/prisma';
import { IGetByIdEvent } from '../event.validation';

class GetByIdEventService {
  async execute(data: IGetByIdEvent) {
    const event = primsa.event.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!event) {
      throw new Error('Evento não encontrado');
    }

    return event;
  }
}

export default new GetByIdEventService();

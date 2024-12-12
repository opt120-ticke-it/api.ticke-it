import primsa from '../../../config/prisma';
import { IGetAllEvents } from '../event.validation';

class GetAllEventsService {
  async execute(data: IGetAllEvents) {
    const take = data.limit || 10;
    const skip = (data.page - 1) * take || 0;

    const res = primsa.event.findMany({
      take,
      skip,
    });

    return res;
  }
}

export default new GetAllEventsService();

import prisma from '../../../config/prisma';
import { IGetByIdTicketTypeSchema } from '../ticketTypes.types';

class GetByIdTicketTypeService {
  async execute(data: IGetByIdTicketTypeSchema) {
    const ticketType = await prisma.ticketType.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!ticketType) throw new Error('Ingresso não encontrado');

    return ticketType;
  }
}

export default new GetByIdTicketTypeService();

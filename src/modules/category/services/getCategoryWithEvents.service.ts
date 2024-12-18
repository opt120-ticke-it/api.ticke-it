import prisma from '../../../config/prisma';
import { IGetByIdCategory } from '../category.validation';

class GetCategoryWithEventsService {
  async execute(data: IGetByIdCategory) {
    const category = await prisma.category.findUnique({
      where: {
        id: data.id,
      },
      include: {
        events: true,
      },
    });

    return category;
  }
}

export default new GetCategoryWithEventsService();

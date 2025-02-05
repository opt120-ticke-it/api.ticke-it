import prisma from '../../../config/prisma';
import { IGetAllCategories } from '../category.validation';

class GetAllCategoriesService {
  async execute(params: IGetAllCategories) {
    const categories = await prisma.category.findMany({
      orderBy: {
        events: {
          _count: 'desc', // Ordena pelo número de eventos em ordem decrescente
        },
      },
      skip: (params.page - 1) * params.limit,
      take: params.limit,
      include: {
        events: true,
      },
    });

    return categories;
  }
}

export default new GetAllCategoriesService();

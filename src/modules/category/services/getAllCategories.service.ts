import prisma from '../../../config/prisma';
import { IGetAllCategories } from '../category.validation';

class GetAllCategoriesService {
  async execute(params: IGetAllCategories) {
    const categories = await prisma.category.findMany({
      skip: (params.page - 1) * params.limit,
      take: params.limit,
    });

    return categories;
  }
}

export default new GetAllCategoriesService();

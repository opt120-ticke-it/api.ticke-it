import prisma from '../../../config/prisma';
import { IGetByIdCategory } from '../category.validation';

class GetByIdCategoryService {
  async execute(data: IGetByIdCategory) {
    const category = await prisma.category.findUnique({
      where: {
        id: data.id,
      },
    });

    return category;
  }
}

export default new GetByIdCategoryService();

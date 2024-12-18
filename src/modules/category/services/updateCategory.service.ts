import prisma from '../../../config/prisma';
import { IUpdateCategory } from '../category.validation';

class UpdateCategoryService {
  async execute(data: IUpdateCategory) {
    const category = await prisma.category.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });

    return category;
  }
}

export default new UpdateCategoryService();

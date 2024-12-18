import prisma from '../../../config/prisma';
import { ICreateCategory } from '../category.validation';

class CreateCategoryService {
  async execute(data: ICreateCategory) {
    const category = await prisma.category.create({
      data: {
        name: data.name,
      },
    });

    return category;
  }
}

export default new CreateCategoryService();

import prisma from '../../../config/prisma';
import { IGetByIdCategory } from '../category.validation';

class DeleteCategoryService {
  async execute(data: IGetByIdCategory) {
    const category = await prisma.category.delete({
      where: {
        id: data.id,
      },
    });

    return category;
  }
}

export default new DeleteCategoryService();

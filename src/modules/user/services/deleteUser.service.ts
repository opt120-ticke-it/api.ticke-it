import prisma from '../../../config/prisma';
import { IGetByIdUser } from '../user.validation';

class DeleteUserService {
  async execute(data: IGetByIdUser) {
    const user = await prisma.user.delete({
      where: {
        id: data.id,
      },
    });

    return user;
  }
}

export default new DeleteUserService();

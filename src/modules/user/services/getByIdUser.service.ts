import prisma from '../../../config/prisma';
import { IGetByIdUser } from '../user.validation';

class GetByIdUserService {
  async execute(data: IGetByIdUser) {
    const user = await prisma.user.findUnique({
      where: {
        id: data.id,
      },
    });

    return user;
  }
}

export default new GetByIdUserService();

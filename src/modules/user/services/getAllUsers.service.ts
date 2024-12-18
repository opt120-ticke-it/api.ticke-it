import prisma from '../../../config/prisma';
import { IGetAllUsers } from '../user.validation';

class GetAllUsersService {
  async execute(params: IGetAllUsers) {
    const users = await prisma.user.findMany({
      skip: (params.page - 1) * params.limit,
      take: params.limit,
    });

    return users;
  }
}

export default new GetAllUsersService();

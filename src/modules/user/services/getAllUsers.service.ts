import prisma from '../../../config/prisma';
import { IGetAllUsers } from '../user.validation';

class GetAllUsersService {
  async execute() {
    const users = await prisma.user.findMany();

    console.log(users);
    
    return users;
  }
}

export default new GetAllUsersService();

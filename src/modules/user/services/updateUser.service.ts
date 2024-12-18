import prisma from '../../../config/prisma';
import { IUpdateUser } from '../user.validation';
import { hashPassword } from '../../../utils/hash';

class UpdateUserService {
  async execute(data: IUpdateUser) {
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return user;
  }
}

export default new UpdateUserService();

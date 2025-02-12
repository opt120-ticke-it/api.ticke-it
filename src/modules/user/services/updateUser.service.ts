import prisma from '../../../config/prisma';
import { hashPassword, verifyPassword } from '../../../utils/hash';
import { IUpdateUser } from '../user.validation';

class UpdateUserService {
  async execute(data: IUpdateUser) {
    const user = await prisma.user.findUnique({ where: { id: data.id } });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (data.password) {
      const isOldPasswordValid = await verifyPassword(data.oldPassword!, user.password);
      if (!isOldPasswordValid) {
        throw new Error('Senha antiga incorreta');
      }
      data.password = await hashPassword(data.password);
    }

    const updatedUser = await prisma.user.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        gender: data.gender,
        password: data.password,
      },
    });

    return updatedUser;
  }
}

export default new UpdateUserService();
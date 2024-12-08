import prisma from '../../config/prisma';
import { hashPassword } from '../../utils/hash';

export const register = async (data: { name: string; email: string; password: string }) => {
  const hashedPassword = await hashPassword(data.password);
  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

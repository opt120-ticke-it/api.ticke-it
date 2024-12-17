import prisma from '../../config/prisma';
import { hashPassword } from '../../utils/hash';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export const register = async (input: RegisterInput) => {
  const { name, email, password } = input;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('Usuário já existe com este e-mail.');
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    },
  });

  return newUser;
};

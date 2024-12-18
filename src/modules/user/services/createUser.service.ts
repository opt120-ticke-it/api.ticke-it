import prisma from '../../../config/prisma';
import { hashPassword } from '../../../utils/hash';
import { RegisterUserSchema, IRegisterUser } from '../user.validation';

export const register = async (input: IRegisterUser) => {
  const data = RegisterUserSchema.parse(input);

  const { name, email, password } = data;

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

import prisma from '../../../config/prisma';
import { hashPassword } from '../../../utils/hash';
import { RegisterUserSchema, IRegisterUser } from '../user.validation';

export const register = async (input: IRegisterUser) => {
  const data = RegisterUserSchema.parse(input);

  const { name, email, password, cpf, birthDate, gender } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email, cpf },
  });

  if (existingUser) {
    throw new Error('Usuário já existe com este e-mail.');
  }

  const hashedPassword = await hashPassword(password);

  const birthDateFormatted = new Date(birthDate);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      cpf,
      birthDate: birthDateFormatted, 
      gender,
    },
  });

  return newUser;
};

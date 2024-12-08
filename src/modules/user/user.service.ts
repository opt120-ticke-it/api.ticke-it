import prisma from '../../config/prisma';
import { hashPassword } from '../../utils/hash';

enum UserTypeEnum { 
    CLIENTE = 'CLIENTE', 
    ORGANIZADOR = 'ORGANIZADOR', 
    FUNCIONARIO = 'FUNCIONARIO'
}

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  userType: UserTypeEnum;
}

export const register = async(input: RegisterInput) => {
  const { name, email, password, userType } = input;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('Usuário já existe com este e-mail.');
  }

  const hashedPassword = hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      userType,
      createdAt: new Date(),
    },
  });

  return newUser;
}
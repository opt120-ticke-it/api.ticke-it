import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../../../config/prisma';
import { verifyPassword } from '../../../utils/hash';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await verifyPassword(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign({ userId: user.id }, (process.env.JWT_SECRET || 'secret'), {
      expiresIn: '1h',
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        birthDate: user.birthDate,
        gender: user.gender,
      },
    };
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};
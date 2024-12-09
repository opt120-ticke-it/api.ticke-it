import prisma from '../../config/prisma';
import { verifyPassword } from '../../utils/hash';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

export const login = async ({ email, password }: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await verifyPassword(password, user.password))) {
    throw new Error('Credenciais Inválidas');
  }

  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });

  const now = new Date();
  const expiresAt = new Date(now.getTime() + 60 * 60 * 1000);

  await prisma.session.create({
    data: {
      userId: user.id,
      token,
      createdAt: now,
      expiresAt: expiresAt,
    },
  });

  return token;
};

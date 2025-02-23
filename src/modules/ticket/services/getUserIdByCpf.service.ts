import prisma from '../../../config/prisma';

export const getUserIdByCpf = async (cpf: string): Promise<number | null> => {
  const user = await prisma.user.findUnique({
    where: { cpf },
    select: { id: true },
  });

  return user ? user.id : null;
};

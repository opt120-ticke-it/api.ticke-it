import prisma from '../../../config/prisma';

export const getUserIdByCpf = async (cpf: string): Promise<number | null> => {
    console.log("CPF recebido:", cpf); // <-- Adicione este log
  
    if (!cpf) {
      throw new Error("CPF inválido ou não fornecido.");
    }
  
    const user = await prisma.user.findUnique({
      where: { cpf },
      select: { id: true },
    });
  
    return user ? user.id : null;
  };
  
import prisma from "../../../config/prisma";
import { TicketStatus } from "../../../models/ticket.model"; // Importe corretamente


export const updateTicketStatus = async (ticketId: string | number, status: TicketStatus) => {
  return await prisma.ticket.update({
    where: { id: Number(ticketId) }, // Converte ticketId para number
    data: { status },
  });
};

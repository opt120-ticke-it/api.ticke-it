import { z } from 'zod';

export const validateTicket = z.object({
  ticketCode: z.string(),
  eventId: z.number(),
  validatorId: z.number(),
});

export type IValidateTicket = z.infer<typeof validateTicket>;

export const CreateTicketSchema = z.object({
  userId: z.number(),
  eventId: z.number(),
  ticketTypeId: z.number(),
});

export type ICreateTicket = z.infer<typeof CreateTicketSchema>;

export const TransferTicketSchema = z.object({
  ticketId: z.number(),
  originUserId: z.number(),
  destinationUserCpf: z.string().min(11).max(14),
});

export type ITransferTicket = {
  ticketId: number;
  originUserId: number;
  destinationUserId: number;
};
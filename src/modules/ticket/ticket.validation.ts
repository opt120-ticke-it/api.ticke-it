import { z } from 'zod';

export const validateTicket = z.object({
  ticketCode: z.string(),
  eventId: z.number(),
  validatorId: z.number(),
});

export const TransferTicketSchema = z.object({
  originUserId: z.number().positive(),
  destinationUserId: z.number().positive(),
  ticketId: z.number().positive(),
});

export type ITransferTicket = z.infer<typeof TransferTicketSchema>;

export type IValidateTicket = z.infer<typeof validateTicket>;

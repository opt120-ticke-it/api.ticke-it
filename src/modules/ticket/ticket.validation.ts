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
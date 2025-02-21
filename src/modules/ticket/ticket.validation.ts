import { z } from 'zod';

export const validateTicket = z.object({
  ticketCode: z.string(),
  eventId: z.number(),
  validatorId: z.number(),
});

export type IValidateTicket = z.infer<typeof validateTicket>;

import { z } from 'zod';

export const CreateTicketTypesSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  totalQuantity: z.number().positive(),
  eventId: z.number(),
});

export type ICreateTicketTypes = z.infer<typeof CreateTicketTypesSchema>;

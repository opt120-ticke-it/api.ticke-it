import { z } from 'zod';

export const CreateTicketTypesSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  totalQuantity: z.number().positive(),
  eventId: z.number(),
});

export type ICreateTicketTypes = z.infer<typeof CreateTicketTypesSchema>;

export const AddTicketQuantitySchema = z.object({
  quantity: z.number().positive(),
  ticketTypeId: z.number(),
});

export type IAddTicketQuantity = z.infer<typeof AddTicketQuantitySchema>;

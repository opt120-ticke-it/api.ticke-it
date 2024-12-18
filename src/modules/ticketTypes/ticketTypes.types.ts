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
  id: z.number(),
});

export type IAddTicketQuantity = z.infer<typeof AddTicketQuantitySchema>;

export const RemoveTicketQuantitySchema = z.object({
  quantity: z.number().positive(),
  id: z.number(),
});

export type IRemoveTicketQuantity = z.infer<typeof RemoveTicketQuantitySchema>;

export const GetByIdTicketTypeSchema = z.object({
  id: z.coerce.number(),
});

export type IGetByIdTicketTypeSchema = z.infer<typeof GetByIdTicketTypeSchema>;

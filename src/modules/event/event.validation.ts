import { z } from 'zod';

export type ICreateEvent = z.infer<typeof CreateEventSchema>;

export const CreateEventSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  startDate: z.string().min(3),
  endDate: z.string().min(3),
  location: z.string().min(3),
  organizerId: z.number(),
  categoryId: z.number(),
  ticketTypes: z
    .array(
      z.object({
        name: z.string().min(3),
        price: z.number().positive(),
        totalQuantity: z.number().positive(),
      })
    )
    .optional(),
  image4x3: z.string().optional(),
  image16x9: z.string().optional(),
});

export type IUpdateEvent = z.infer<typeof UpdateEventSchema>;

export const UpdateEventSchema = z.object({
  id: z.number(),
  name: z.string().min(3).optional(),
  description: z.string().min(3).optional(),
  startDate: z.string().min(3).optional(),
  endDate: z.string().min(3).optional(),
  location: z.string().min(3).optional(),
  organizerId: z.number().optional(),
  categoryId: z.number().optional(),
  image4x3: z.string().optional(),
  image16x9: z.string().optional(),
});

export type IGetAllEvents = z.infer<typeof GetAllEventsSchema>;

export const GetAllEventsSchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export type IGetByIdEvent = z.infer<typeof GetByIdEventSchema>;

export const GetByIdEventSchema = z.object({
  id: z.coerce.number(),
});

export const GetEventTicketTypesSchema = z.object({
  id: z.coerce.number(),
});

export type IGetEventTicketTypes = z.infer<typeof GetEventTicketTypesSchema>;
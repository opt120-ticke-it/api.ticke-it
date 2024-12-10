import { z } from 'zod';

export type ICreateEvent = z.infer<typeof CreateEventSchema>;

export const CreateEventSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  startDate: z.string().min(3),
  endDate: z.string().min(3),
  location: z.string().min(3),
  organizerId: z.number(),
});

export type IUpdateEvent = z.infer<typeof UpdateEventSchema>;

export const UpdateEventSchema = z.object({
  name: z.string().min(3).optional(),
  description: z.string().min(3).optional(),
  startDate: z.string().min(3).optional(),
  endDate: z.string().min(3).optional(),
  location: z.string().min(3).optional(),
  organizerId: z.number().optional(),
});

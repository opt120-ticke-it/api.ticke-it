import { date, z } from 'zod';

export type IRegisterUser = z.infer<typeof RegisterUserSchema>;

export const RegisterUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  cpf: z.string().length(14),
  birthDate: z.string(),
  gender: z.string(),
});

export type IUpdateUser = z.infer<typeof UpdateUserSchema>;

export const UpdateUserSchema = z.object({
  id: z.number(),
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
});

export type IGetAllUsers = z.infer<typeof GetAllUsersSchema>;

export const GetAllUsersSchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export type IGetByIdUser = z.infer<typeof GetByIdUserSchema>;

export const GetByIdUserSchema = z.object({
  id: z.coerce.number(),
});

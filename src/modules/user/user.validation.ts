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
  gender: z.string().optional(),
  password: z.string().min(6).optional(),
  oldPassword: z.string().min(6).optional(),
}).refine((data) => {
  if (data.password) {
    return data.oldPassword;
  }
  return true;
}, {
  message: "oldPassword é obrigatório quando password está presente",
  path: ["oldPassword"],
});

export type IGetAllUsers = z.infer<typeof GetAllUsersSchema>;

export const GetAllUsersSchema = z.object({});

export type IGetByIdUser = z.infer<typeof GetByIdUserSchema>;

export const GetByIdUserSchema = z.object({
  id: z.coerce.number(),
});

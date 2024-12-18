import { z } from 'zod';

export type ICreateCategory = z.infer<typeof CreateCategorySchema>;

export const CreateCategorySchema = z.object({
  name: z.string().min(3),
});

export type IUpdateCategory = z.infer<typeof UpdateCategorySchema>;

export const UpdateCategorySchema = z.object({
  id: z.number(),
  name: z.string().min(3).optional(),
});

export type IGetAllCategories = z.infer<typeof GetAllCategoriesSchema>;

export const GetAllCategoriesSchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export type IGetByIdCategory = z.infer<typeof GetByIdCategorySchema>;

export const GetByIdCategorySchema = z.object({
  id: z.number(),
});

import { Request, Response } from 'express';
import {
  CreateCategorySchema,
  GetByIdCategorySchema,
  GetAllCategoriesSchema,
  UpdateCategorySchema,
} from './category.validation';
import createCategoryService from './services/createCategory.service';
import getByIdCategoryService from './services/getByIdCategory.service';
import getAllCategoriesService from './services/getAllCategories.service';
import updateCategoryService from './services/updateCategory.service';
import deleteCategoryService from './services/deleteCategory.service';
import getCategoryWithEventsService from './services/getCategoryWithEvents.service';

class CategoryController {
  async create(req: Request, res: Response) {
    try {
      const data = CreateCategorySchema.parse(req.body);

      const response = await createCategoryService.execute(data);

      return res.status(201).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const data = GetByIdCategorySchema.parse({ id: Number(req.params.id) });

      const response = await getByIdCategoryService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async list(req: Request, res: Response) {
    try {
      const params = GetAllCategoriesSchema.parse(req.query);

      const response = await getAllCategoriesService.execute(params);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = UpdateCategorySchema.parse({ ...req.body, id: Number(req.params.id) });

      const response = await updateCategoryService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const data = GetByIdCategorySchema.parse({ id: Number(req.params.id) });

      const response = await deleteCategoryService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async getCategoryWithEvents(req: Request, res: Response) {
    try {
      const data = GetByIdCategorySchema.parse({ id: Number(req.params.id) });

      const response = await getCategoryWithEventsService.execute(data);

      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}

export default new CategoryController();

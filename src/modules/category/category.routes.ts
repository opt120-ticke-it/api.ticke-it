import { Router } from 'express';
import categoryController from './category.controller';

const categoryRoutes = Router();

categoryRoutes.post('/', categoryController.create);
categoryRoutes.get('/:id', categoryController.show);
categoryRoutes.get('/', categoryController.list);
categoryRoutes.patch('/:id', categoryController.update);
categoryRoutes.delete('/:id', categoryController.delete);
categoryRoutes.get('/:id/events', categoryController.getCategoryWithEvents);

export default categoryRoutes;

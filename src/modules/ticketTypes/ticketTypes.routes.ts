import { Router } from 'express';
import ticketTypesController from './ticketTypes.controller';

const ticketTypeRoutes = Router();

ticketTypeRoutes.post('/', ticketTypesController.create);
ticketTypeRoutes.get('/:id', ticketTypesController.getById);
ticketTypeRoutes.put('/:id/addQuantity', ticketTypesController.addQuantity);
ticketTypeRoutes.put(
  '/:id/removeQuantity',
  ticketTypesController.removeQuantity
);

export default ticketTypeRoutes;

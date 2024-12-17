import { Router } from 'express';
import ticketTypesController from './ticketTypes.controller';

const ticketTypeRoutes = Router();

ticketTypeRoutes.post('/', ticketTypesController.create);
ticketTypeRoutes.put('/:id/addQuantity', ticketTypesController.addQuantity);

export default ticketTypeRoutes;

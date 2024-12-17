import { Router } from 'express';
import ticketTypesController from './ticketTypes.controller';

const ticketTypeRoutes = Router();

ticketTypeRoutes.post('/', ticketTypesController.create);

export default ticketTypeRoutes;

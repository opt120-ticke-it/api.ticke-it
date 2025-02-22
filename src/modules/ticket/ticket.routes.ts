import { Router } from 'express';
import TicketController from './ticket.controller';

const ticketRoutes = Router();

ticketRoutes.post('/', TicketController.create);
ticketRoutes.post('/validate', TicketController.validate);

export default ticketRoutes;
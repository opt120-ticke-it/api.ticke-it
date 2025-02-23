import { Router } from 'express';
import { ticketController, transfer, updateTicketController } from './ticket.controller';

const ticketRoutes = Router();

ticketRoutes.post('/', ticketController.create);
ticketRoutes.put("/:id", updateTicketController);
ticketRoutes.post('/validate', ticketController.validate);
ticketRoutes.post('/transfer', transfer);

export default ticketRoutes;

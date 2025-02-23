import { Router } from 'express';
import TicketController, { transfer, updateTicketController } from './ticket.controller';
const ticketRoutes = Router();

ticketRoutes.post('/', TicketController.create);
ticketRoutes.put("/:id", updateTicketController);
ticketRoutes.post('/validate', TicketController.validate);
ticketRoutes.post('/transfer', transfer);

export default ticketRoutes;

import { Router } from 'express';
import { transfer } from './ticket.controller';

const ticketRoutes = Router();

ticketRoutes.post('/transfer', transfer);

export default ticketRoutes;

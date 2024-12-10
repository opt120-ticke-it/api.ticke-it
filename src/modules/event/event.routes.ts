import { Router } from 'express';
import eventController from './event.controller';

const eventRoutes = Router();

eventRoutes.post('/', eventController.create);

export default eventRoutes;

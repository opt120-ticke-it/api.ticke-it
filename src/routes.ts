import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/user/user.routes';
import eventRoutes from './modules/event/event.routes';
import ticketTypeRoutes from './modules/ticketTypes/ticketTypes.routes';
import categoryRoutes from './modules/category/category.routes';

const appRoutes = Router();

appRoutes.use('/auth', authRoutes);
appRoutes.use('/user', userRoutes);
appRoutes.use('/event', eventRoutes);
appRoutes.use('/ticketTypes', ticketTypeRoutes);
appRoutes.use('/category', categoryRoutes);

export default appRoutes;

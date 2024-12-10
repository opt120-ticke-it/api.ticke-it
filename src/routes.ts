import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/user/user.routes';
import eventRoutes from './modules/event/event.routes';

const appRoutes = Router();

appRoutes.use('/auth', authRoutes);
appRoutes.use('/user', userRoutes);
appRoutes.use('/avent', eventRoutes);

export default appRoutes;

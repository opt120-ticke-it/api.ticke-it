import { Router } from 'express';
import * as userController from './user.controller';

const userRoutes = Router();

userRoutes.post('/registrar', userController.register);

export default userRoutes;

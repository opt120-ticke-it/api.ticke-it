import { Router } from 'express';
import * as userController from './user.controller';

const userRoutes = Router();

userRoutes.post('/registrar', userController.register);
userRoutes.get('/', userController.list);
userRoutes.get('/:id', userController.show);
userRoutes.patch('/:id', userController.update);
userRoutes.delete('/:id', userController.deleteUser);
userRoutes.get('/:id/events', userController.getUserEvents);

export default userRoutes;

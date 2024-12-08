import { Router } from 'express';
import * as userController from './user.controller';

const router = Router();

router.post('/registrar', userController.register);

export default router;
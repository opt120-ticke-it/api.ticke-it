import { Request, Response } from 'express';
import * as userService from './user.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    const e = error as Error;
    res.status(401).json({ error: e.message });
  }
};

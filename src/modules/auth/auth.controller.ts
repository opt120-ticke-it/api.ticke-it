import { Request, Response } from 'express';
import * as authService from './auth.service';

export const login = async (req: Request, res: Response) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ token });
  } catch (error: any) {
    const e = error as Error;
    res.status(401).json({ error: e.message });
  }
};

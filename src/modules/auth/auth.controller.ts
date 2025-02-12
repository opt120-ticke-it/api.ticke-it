import { Request, Response } from 'express';
import * as authService from './services/auth.service';

export const login = async (req: Request, res: Response) => {
  try {
    const response = await authService.login(req,res);
    res.status(200).json(response);
  } catch (error: any) {
    const e = error as Error;
    res.status(401).json({ error: e.message });
  }
};

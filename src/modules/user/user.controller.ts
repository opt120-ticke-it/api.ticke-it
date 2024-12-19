import { Request, Response } from 'express';
import * as userService from './services/createUser.service';
import getAllUsersService from './services/getAllUsers.service';
import getByIdUserService from './services/getByIdUser.service';
import updateUserService from './services/updateUser.service';
import deleteUserService from './services/deleteUser.service';
import getUserEventsService from './services/getUserEvents.service';
import { GetByIdUserSchema, GetAllUsersSchema, UpdateUserSchema, RegisterUserSchema } from './user.validation';

export const register = async (req: Request, res: Response) => {
  try {
    const data = RegisterUserSchema.parse(req.body);

    const user = await userService.register(data);
    res.status(201).json(user);
  } catch (error: any) {
    const e = error as Error;
    res.status(401).json(e.message);
  }
};

export const list = async (req: Request, res: Response) => {
  try {
    const params = GetAllUsersSchema.parse(req.query);

    const response = await getAllUsersService.execute(params);

    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const data = GetByIdUserSchema.parse({ id: Number(req.params.id) });

    const response = await getByIdUserService.execute(data);

    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const data = UpdateUserSchema.parse({ ...req.body, id: Number(req.params.id) });

    const response = await updateUserService.execute(data);

    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const data = GetByIdUserSchema.parse({ id: Number(req.params.id) });

    const response = await deleteUserService.execute(data);

    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

export const getUserEvents = async (req: Request, res: Response) => { 
  try { 
    const id = Number(req.params.id); 
    if (isNaN(id)) { 
      throw new Error('Invalid id format.'); 
    } 
    const data = GetByIdUserSchema.parse({ id }); 
    const response = await getUserEventsService.execute(data); 
    return res.status(200).json(response); 
  } catch (error: any) { 
    console.log(error); 
    return res.status(400).json(error.message); 
  } 
};
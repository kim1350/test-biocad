import { NextFunction, Response } from 'express';
import * as UserService from './user.service';
import { AuthRequest } from '../../middlewares/authMiddleware';

export const getUsers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await UserService.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

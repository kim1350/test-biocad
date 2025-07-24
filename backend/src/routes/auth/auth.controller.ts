import { Request, Response } from 'express';
import * as AuthService from './auth.service';

export const login = (req: Request, res: Response) =>
  AuthService.login(req, res);
export const register = (req: Request, res: Response) =>
  AuthService.register(req, res);

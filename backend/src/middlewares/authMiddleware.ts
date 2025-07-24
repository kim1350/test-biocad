import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config/config';

export interface AuthRequest extends Request {
  user?: string | JwtPayload;
}
export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.sendStatus(401);

  try {
    const token = auth.split(' ')[1];
    const payload = jwt.verify(token, config.jwtSecret);
    req.user = payload;
    next();
  } catch {
    res.sendStatus(403);
  }
};

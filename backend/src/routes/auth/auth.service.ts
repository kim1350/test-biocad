import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../../config/config';
import { Request, Response } from 'express';
import { LoginRequestBody, RegisterRequestBody } from './auth.types';
import prisma from '../../prisma/client';

export const register = async (
  req: Request<unknown, unknown, RegisterRequestBody>,
  res: Response,
) => {
  const { email, password, name } = req.body;
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(400).json({ error: 'User already exists' });

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hash, name },
  });

  res.json({ id: user.id, email: user.email });
};

export const login = async (
  req: Request<unknown, unknown, LoginRequestBody>,
  res: Response,
) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
    expiresIn: '1h',
  });
  res.json({ token });
};

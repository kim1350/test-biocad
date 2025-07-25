import bcrypt from 'bcrypt';

import { Request, Response } from 'express';
import { LoginRequestBody, RegisterRequestBody } from './auth.types';
import prisma from '../../prisma/client';
import { registerSchema } from './auth.schema';
import { generateTokenResponse } from '../../utils/generateToken';
import jwt from 'jsonwebtoken';
import { config } from '../../config/config';
export const register = async (
  req: Request<unknown, unknown, RegisterRequestBody>,
  res: Response,
) => {
  try {
    const parsed = registerSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.format();
      return res
        .status(400)
        .json({ error: 'Validation failed', details: errors });
    }

    const { email, password, name } = parsed.data;

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(400).json({ error: 'User already exists' });

    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hash, name },
    });

    const tokenData = generateTokenResponse(user.id);

    res.status(201).json({
      user: { id: user.id, email: user.email, name: user.name },
      ...tokenData,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const login = async (
  req: Request<unknown, unknown, LoginRequestBody>,
  res: Response,
) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res
        .status(401)
        .json({ error: 'Invalid credentials. email not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ error: 'Invalid credentials. pass' });

    const tokenData = generateTokenResponse(user.id);

    res.json({
      user: { id: user.id, email: user.email, name: user.name },
      ...tokenData,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token required' });
    }

    const decoded = jwt.verify(refreshToken, config.refreshTokenSecret) as {
      userId: number;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const tokenData = generateTokenResponse(user.id);

    res.json(tokenData);
  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(401).json({ error: 'Invalid or expired refresh token' });
  }
};

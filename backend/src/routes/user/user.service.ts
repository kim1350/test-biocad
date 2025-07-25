import { AuthRequest } from '../../middlewares/authMiddleware';
import prisma from '../../prisma/client';
import { Response } from 'express';
export const getUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      photo: true,
    },
  });
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, name: true, photo: true },
  });

  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({ user });
};

import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { getUsers } from './user.controller';
import { getProfile } from './user.service';

const router = Router();
router.get('/users', authMiddleware, getUsers);
router.get('/me', authMiddleware, getProfile);

export default router;

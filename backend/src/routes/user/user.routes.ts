import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { getUsers } from './user.controller';

const router = Router();
router.get('/users', authMiddleware, getUsers);

export default router;

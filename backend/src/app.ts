import express from 'express';
import authRoutes from './routes/auth/auth.routes';
import userRoutes from './routes/user/user.routes';

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);

export default app;

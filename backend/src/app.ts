import express from 'express';
import authRoutes from './routes/auth/auth.routes';

const app = express();
app.use(express.json());
app.use(authRoutes);

export default app;

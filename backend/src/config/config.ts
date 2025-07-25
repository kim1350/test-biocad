import dotenv from 'dotenv';
dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'refreshsecret',
  port: process.env.PORT,
};

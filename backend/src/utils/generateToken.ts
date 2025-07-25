import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export const generateTokenResponse = (userId: number) => {
  const accessTokenExpiresIn = 60 * 60;
  const refreshTokenExpiresIn = 60 * 60 * 24 * 7;

  const accessToken = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: accessTokenExpiresIn,
  });

  const refreshToken = jwt.sign({ userId }, config.refreshTokenSecret, {
    expiresIn: refreshTokenExpiresIn,
  });

  return {
    accessToken,
    refreshToken,
    expires_in: accessTokenExpiresIn,
    expires_timestamp: Math.floor(Date.now() / 1000) + accessTokenExpiresIn,
  };
};

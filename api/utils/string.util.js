import crypto from 'crypto';

export const getRandom = (size = 15) =>
  crypto.randomBytes(size).toString('hex');

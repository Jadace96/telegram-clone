import crypto from 'crypto';

export const getRandom = (min = 1, max = 1000000) => crypto.randomInt(min, max);

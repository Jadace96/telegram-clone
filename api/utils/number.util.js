export const getRandom = (min = 1, max = 1000000) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function getRandomNumber(min = 1, max = 1000000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  getRandomNumber,
};

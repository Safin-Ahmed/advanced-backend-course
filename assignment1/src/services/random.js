const generateRandomNumber = (start, end) => {
  return start + Math.floor(Math.random() * (end - start));
};

module.exports = generateRandomNumber;

function countChars(str) {
  const result = {
    input: str.trim(),
    letters: 0,
    symbols: 0,
    numbers: 0,
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-zA-Z]/.test(char)) {
      result.letters++;
    } else if (/\d/.test(char)) {
      result.numbers++;
    } else {
      result.symbols++;
    }
  }

  return result;
}

module.exports = countChars;

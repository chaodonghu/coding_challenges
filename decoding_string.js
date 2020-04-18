// Question:
//
// Run-length encoding is a fast and simple method of encoding strings.
// The basic idea is to represent repeated successive characters as a single count and character.

// For example, the string “AAAABBBCCDAA” would be encoded as “4A3B2C1D2A”.

// Implement run-length decoding.
// You can assume the string to be decoded is valid.

const isNumber = str => {
  return /^\d+$/.test(str);
};

const addCountAmount = string, char, count => {
  for (let i = 1; i <= count; i++) {
    string += char;
  }

  return string;
};

const decoding_string = string => {
  if (!string.length) return "";
  let currCount = 0;
  let i = 0;
  let decoding = "";

  while (i < string.length) {
    const char = string.charAt(i);
    if (isNumber(char)) {
      const num = Number(char);
      currCount = currCount * 10 + num;
    } else {
      decoding = addCountAmount(decoding, char, currCount);
      currCount = 0;
    }
    i++;
  }
  return decoding;
};

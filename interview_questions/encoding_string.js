// Question:
//
// Run-length encoding is a fast and simple method of encoding strings.
// The basic idea is to represent repeated successive characters as a single count and character.

// For example, the string “AAAABBBCCDAA” would be encoded as “4A3B2C1D2A”.

// Implement run-length encoding.
// You can assume the string to be encoded have no digits and consists solely of alphabetic characters.

const encoding_string = string => {
  if (string.length === 0) return "";

  let currChar = string.charAt(0);
  let count = 1;
  let encoding = "";

  for (let i = 1; i < string.length; i++) {
    const char = string.charAt(i);
    if (char === currChar) count++;
    else {
      encoding += count + currChar;

      // reset
      count = 1;
      currChar = char;
    }
  }

  encoding += count + currChar;

  return encoding;
};

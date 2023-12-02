/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let charsMap = {};

  for (char of chars) {
    charsMap[char] = (charsMap[char] || 0) + 1;
  }

  let length = 0;
  for (word of words) {
    // create a copy of the chars map
    const copyOfCharsMap = { ...charsMap };

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (copyOfCharsMap[letter] && copyOfCharsMap[letter] !== 0) {
        copyOfCharsMap[letter] -= 1;
      } else {
        break;
      }

      // if we are at the end of the word, add the length of the word to the result
      if (i === word.length - 1) {
        length += word.length;
      }
    }
  }

  return length;
};

// Time: O(N)
// Space: O(N) since the charsMap requires space to store the character frequencies

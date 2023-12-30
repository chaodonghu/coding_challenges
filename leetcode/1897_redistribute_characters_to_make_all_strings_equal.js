/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  let n = words.length;

  let charMap = {};

  // count all the character frequencies
  for (let word of words) {
    for (let letter of word) {
      charMap[letter] = (charMap[letter] || 0) + 1;
    }
  }

  console.log("charMap", charMap);

  // see if each letter is divisble by the number of words, there should be no remainder or missing letters to satisfy the # of words
  for (const letter in charMap) {
    const frequency = charMap[letter];
    if (frequency % n !== 0) return false;
  }

  return true;
};

// Time: O(N * K) with N being words and K being the # of letters
// Space: O(1)
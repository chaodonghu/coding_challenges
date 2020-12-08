/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  // loop through each character of the first word
  for (let i = 0; i < strs[0].length; i++) {
    // loop through all the words
    for (let word of strs) {
      // if a character of the current word does not equal the character of the first word's then slice the word where it ends
      if (word[i] !== strs[0][i]) {
        return word.slice(0, i);
      }
    }
  }

  // return the first word if all the words are equal.
  return strs[0];
};

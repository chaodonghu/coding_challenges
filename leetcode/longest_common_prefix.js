// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Constraints:
//
// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

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

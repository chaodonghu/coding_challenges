// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
//
//
//
// Example 1:
//
// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:
//
// Input: "aba"
// Output: False
// Example 3:
//
// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // duplicate the string
  const str = s + s;
  // get rid of the first character and the last character then check if the new string contains the original string
  return str.slice(1, str.length - 1).includes(s);
};

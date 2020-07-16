// Given two strings s and t , write a function to determine if t is an anagram of s.
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let letterCount = {};

  for (let char of s) {
    !letterCount[char] ? (letterCount[char] = 1) : letterCount[char]++;
  }

  for (let char of t) {
    if (!letterCount[char]) {
      return false;
    }

    if (letterCount[char] < 1) {
      return false;
    }

    letterCount[char]--;
  }

  return true;
};

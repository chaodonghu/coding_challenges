// Given a string s and a string t, check if s is subsequence of t.
//
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
//
// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
//
// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.
//
//
//
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false
//
//
// Constraints:
//
// 0 <= s.length <= 100
// 0 <= t.length <= 10^4
// Both strings consists only of lowercase characters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// stack and queue solution
var isSubsequence = function (s, t) {
  s = s.split("");
  t = t.split("");
  for (tChar of t) {
    if (tChar === s[0]) {
      s.shift();
    }
  }

  if (s.length > 0) {
    return false;
  } else {
    return true;
  }
};

// two pointer solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // set two pointers to start at 0 index
  let sPointer = 0;
  let tPointer = 0;

  // while the second pointer hasn't reached the end of the t string
  while (tPointer < t.length) {
    // if our firstPointer equals the character of the secondPointer move the firstPointer
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    // always move our tPointer
    tPointer++;
  }

  // if our sPointer equates to the full length of the s string then we know that we have moved the pointer so that s is a subsequence of t
  return sPointer === s.length;
};

// Time: O(N)
// Space: O(1)

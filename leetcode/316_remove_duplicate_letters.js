// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
//
// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
//
//
//
// Example 1:
//
// Input: s = "bcabc"
// Output: "abc"
// Example 2:
//
// Input: s = "cbacdcbc"
// Output: "acdb"
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // add lookup for the last index of the character in the string
  let lookup = {};

  for (let i = 0; i < s.length; i++) {
    lookup[s[i]] = i;
  }

  let stack = [];
  let seen = new Set();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if we have already seen the character skip the loop
    if (seen.has(char)) continue;

    // while we have a character in our stack
    // and our last character is lexicographically greater then the current character
    // and the last character in our stack is greater than the current index
    while (
      stack &&
      stack[stack.length - 1] > char &&
      lookup[stack[stack.length - 1]] > i
    ) {
      seen.delete(stack[stack.length - 1]);
      stack.pop();
    }

    // add the current character to the stack
    stack.push(char);
    // add the current character to the seen set
    seen.add(char);
  }

  return stack.join("");
};

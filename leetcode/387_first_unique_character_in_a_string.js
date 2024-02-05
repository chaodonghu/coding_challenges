// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let charMap = new Map();

  // count frequencies for each character in s
  for (char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // go through the string starting at 0 index to find the first character which frequency equals one
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i;
    }
  }

  // if there is no character in the string whose frequency is 1 then return -1;
  return -1;
};

// Time Complexity: O(N) we loop through the input string twice
// (1) to populate hash map
// (2) to find the index of the first character that has only occured once

// Space Complexity: O(1) hashmap will atmost have all letters of the alphabet (26 key-value pairs)

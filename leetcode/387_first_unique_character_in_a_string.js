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
  // hashmap at most will contain all letters of the alphabet (26 key-value pairs)
  let characterCount = {};

  // loop through string once
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    characterCount[char] = characterCount[char] + 1 || 1;
  }

  // loop through string again to return back index
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (characterCount[char] === 1) {
      return i;
    }
  }

  return -1;
};

// Time Complexity: O(N) we loop through the input string twice
// (1) to populate hash map
// (2) to find the index of the first character that has only occured once

// Space Complexity: O(1) hashmap will atmost have all letters of the alphabet (26 key-value pairs)

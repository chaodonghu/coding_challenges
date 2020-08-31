// Given two strings s and t, determine if they are isomorphic.
//
// Two strings are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
//
// Example 1:
//
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
//
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
//
// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Method #1; Map solution
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (!sMap[sChar]) {
      sMap[sChar] = tChar;
    }

    if (!tMap[tChar]) {
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] != tChar || tMap[tChar] != sChar) {
      return false;
    }
  }
  return true;
};

// Method #2; Map solution
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (!sMap[sChar]) {
      sMap[sChar] = tChar;
    }

    if (!tMap[tChar]) {
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] != tChar || tMap[tChar] != sChar) {
      return false;
    }
  }
  return true;
};

// Method #2: Array solution
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sArray = new Array(128).fill(0);
  let tArray = new Array(128).fill(0);

  for (let i = 0; i < s.length; i++) {
    let sIndex = s.charCodeAt(i);
    let tIndex = t.charCodeAt(i);

    if (sArray[sIndex] != tArray[tIndex]) {
      return false;
    }

    sArray[sIndex] = i + 1;
    tArray[tIndex] = i + 1;
  }
  return true;
};

// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Example 1:
//
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:
//
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:
//
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:
//
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

var wordPattern = function (pattern, str) {
  // split str by spaces
  str = str.split(" ");
  // split pattern by non spaces
  pattern = pattern.split("");

  // if the length of the string doesn't equal pattern length
  if (str.length !== pattern.length) return false;
  // if unique characters do not equal
  if (new Set(str).size !== new Set(pattern).size) return false;

  // make a single hash map with the pattern as keys and the string at the pattern index as the value
  let obj = {};
  pattern.forEach((p, i) => {
    obj[p] = str[i];
  });

  // go through the patern and get the values from the hash map and join it by spaces
  // if the new pattern equals the string then return true, else false
  return pattern.map((p) => obj[p]).join(" ") === str.join(" ");
};

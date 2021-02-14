// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Clarification:
//
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
//
//
//
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:
//
// Input: haystack = "", needle = ""
// Output: 0
//
//
// Constraints:
//
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let needleLength = needle.length;
  let haystackLength = haystack.length;

  // if the needle and the haystack equate to an empty string just return 0
  if (needle === "" && haystack === "") {
    return 0;
  }

  // loop through the haystaack's length and utilize the starting substring index
  for (let start = 0; start < haystackLength; start++) {
    // utilize a sliding window that equates to the starting index and the length of the needle
    // substr (starting index, length of cut)
    if (haystack.substr(start, needleLength) === needle) {
      return start;
    }
  }

  return -1;
};

// he
// el
// ll
// lo

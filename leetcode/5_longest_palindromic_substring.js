// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const helper = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }

    return s.slice(l + 1, r);
  };

  let result = "";
  for (let i = 0; i < s.length; i++) {
    let test = helper(i, i);
    console.log('test', test);
    if (test.length > result.length) {
      result = test;
    }
    test = helper(i, i + 1);
    if (test.length > result.length) {
      result = test;
    }
  }

  return result;
};

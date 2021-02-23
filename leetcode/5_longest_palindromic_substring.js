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
  const expandFromMiddle = (l, r) => {
    // we are in bounds, our left has to be greater than 0, our right has to be less than the string
    // our element at the left pointer is equal to the element on the right pointer (palidrome)
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // expand our left pointer
      l--;
      // expand our right pointer
      r++;
    }

    // return the palidrome
    return s.slice(l + 1, r);
  };

  let result = "";
  for (let i = 0; i < s.length; i++) {
    // odd length
    let test = expandFromMiddle(i, i);
    if (test.length > result.length) {
      // update the longest palidrome
      result = test;
    }

    // even length
    test = expandFromMiddle(i, i + 1);
    if (test.length > result.length) {
      // update the longest palidrome
      result = test;
    }
  }

  return result;
};

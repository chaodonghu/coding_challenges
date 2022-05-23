// Given a string, your task is to count how many palindromic substrings in this string.
//
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
//
// Example 1:
//
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
//
//
// Example 2:
//
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  let matrix = [];

  for (let char of s) {
    matrix.push(new Array(s.length).fill(0));
  }

  // for every element that references itself then the palindromic substring count is 1
  for (let i = 0; i < s.length; i++) {
    matrix[i][i] = 1;
    count++;
  }

  for (let col = 1; col < s.length; col++) {
    for (let row = 0; row < col; row++) {
      if (row === col - 1 && s[col] === s[row]) {
        matrix[row][col] = 1;
        count++;
      } else if (matrix[row + 1][col - 1] === 1 && s[col] === s[row]) {
        matrix[row][col] = 1;
        count++;
      }
    }
  }

  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let start = 0; start < s.length; start++) {
    // grow our sliding window
    for (let end = start; end < s.length; end++) {
      count += isPalindrome(s, start, end);
    }
  }

  return count;
};

// check if window is a palindrome, if it is return 1 to add to our count, else return 0
var isPalindrome = function (s, start, end) {
  while (start < end) {
    if (s.charAt(start) != s.charAt(end)) {
      return 0;
    }

    start++;
    end--;
  }

  return 1;
};

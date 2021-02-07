// Given two strings text1 and text2, return the length of their longest common subsequence.
//
// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
//
//
//
// If there is no common subsequence, return 0.
//
//
//
// Example 1:
//
// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:
//
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:
//
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
//
//
// Constraints:
//
// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

// DP Solution
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  let m = text1.length;
  let n = text2.length;

  // instantiate dp array with columns of length text1 and rows of length text2.
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // two  possible scenarioes:
      // 1. the current char of text1 and text2 does not match
      if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
        // check left and top for longer subsequence length
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      // 2. the current char of text1 and text2 matches
      else {
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }

  // return the last of our matrix, and that will be the max
  return dp[m][n];
};

// Recursive solution with memoization
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let map = {};

  const helper = (m, n) => {
    if (!m || !n) return 0;

    let key = `${m}-${n}`;

    if (!(key in map)) {
      if (text1[m - 1] == text2[n - 1]) {
        map[key] = helper(m - 1, n - 1) + 1;
      } else {
        map[key] = Math.max(helper(m - 1, n), helper(m, n - 1));
      }
    }
    return map[key];
  };

  return helper(m, n);
};

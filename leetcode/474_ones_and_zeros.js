// You are given an array of binary strings strs and two integers m and n.
//
// Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.
//
// A set x is a subset of a set y if all elements of x are also elements of y.
//
//
//
// Example 1:
//
// Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
// Output: 4
// Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
// Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
// {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
// Example 2:
//
// Input: strs = ["10","0","1"], m = 1, n = 1
// Output: 2
// Explanation: The largest subset is {"0", "1"}, so the answer is 2.
//
//
// Constraints:
//
// 1 <= strs.length <= 600
// 1 <= strs[i].length <= 100
// strs[i] consists only of digits '0' and '1'.
// 1 <= m, n <= 100

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 *
 * @param {string} str
 */
const getZeroOne = (str) => {
  const { length } = str;
  let zero = 0;
  for (let char of str) {
    if (String(char) === "0") {
      zero++;
    }
  }
  return {
    zero,
    one: length - zero,
  };
};
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    const { zero, one } = getZeroOne(strs[i]);
    for (let j = n; j >= one; j--) {
      for (let k = m; k >= zero; k--) {
        dp[j][k] = Math.max(dp[j - one][k - zero] + 1, dp[j][k]);
      }
    }
  }
  return dp[n][m];
};

// Time: O(str.length * m * n)
// Space: O(m * n)

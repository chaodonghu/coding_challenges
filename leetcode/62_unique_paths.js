// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?
//
//
// Above is a 7 x 3 grid. How many possible unique paths are there?
//
//
//
// Example 1:
//
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:
//
// Input: m = 7, n = 3
// Output: 28
//
//
// Constraints:
//
// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m + 1).fill(1).map((x) => new Array(n + 1).fill(0));
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      if (row == 1 && col == 1) {
        dp[row][col] = 1;
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }
    }
  }

  return dp[n][m];
};

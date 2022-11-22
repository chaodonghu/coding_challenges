// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//
// Example 1:
//
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:
//
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  // Go through 1 to n
  for (let i = 1; i <= n; i++) {
    // Go through each iteration of a square until we hit our target n
    for (let j = 1; j <= i + 1; j++) {
      // Square the loop
      let square = j * j;
      // If our target - square is less than 0 then break out of our loop
      if (i - square < 0) {
        break;
      }
      // The minimum of squares of the current target or 1 + the target - square
      dp[i] = Math.min(dp[i], 1 + dp[i - square]);
    }
  }
  return dp[n];
};

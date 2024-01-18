// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Example 1:
//
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
//
//
// Constraints:
//
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

// recursively
let seenMap = {};

var climbStairs = function (n) {
  if (n < 3) return n;
  if (!(n in seenMap)) {
    seenMap[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  return seenMap[n];
};

// iteratively
var climbStairs = function (n) {
  if (n <= 2) return n;

  let prev1 = 1;
  let prev2 = 2;
  let current = 0;

  for (let i = 2; i < n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
};

// dp solution
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);

    // to get to the first step there is only one way
    dp[1] = 1;
    // to get to the second step there are two ways (1 + 1 or 2)
    dp[2] = 2;

    // every subsequent step is the sum of the previous two steps
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
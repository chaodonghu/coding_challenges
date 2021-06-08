/**
 * @param {number[]} cost
 * @return {number}
 */

/**
 * @param {number[]} cost
 * @return {number}
 */

// bottom up tabulation
// our recurance relation is the minimum cost at an index is the minimum between
// minimum[i - 1] + cost[i - 1]
// minimum[i - 2] + cost[i - 2]
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length + 1).fill(0);

  // start at index 2 because we can start at the 0th or 1th index
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[dp.length - 1];
};
// Time: O(N)
// Space: O(N)

var minCostClimbingStairs = function (cost) {
  let prev2 = cost[0];
  let prev1 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let temp = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = temp;
  }

  return Math.min(prev1, prev2);
};

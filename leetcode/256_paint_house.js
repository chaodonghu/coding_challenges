// There is a row of n houses, where each house can be painted one of three colors: red, blue, or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.
//
// The cost of painting each house with a certain color is represented by an n x 3 cost matrix costs.
//
// For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...
// Return the minimum cost to paint all houses.
//
//
//
// Example 1:
//
// Input: costs = [[17,2,17],[16,16,5],[14,3,19]]
// Output: 10
// Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
// Minimum cost: 2 + 5 + 3 = 10.
// Example 2:
//
// Input: costs = [[7,6,2]]
// Output: 2
//
//
// Constraints:
//
// costs.length == n
// costs[i].length == 3
// 1 <= n <= 100
// 1 <= costs[i][j] <= 20
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  // the intuition is the cost of painting the current house it's color is the minimum cost of painting the other colors plus the current cost of painting the current color
  if (!costs.length) return 0;

  let n = costs.length;

  for (let i = 1; i < n; i++) {
    let [prev1, prev2, prev3] = costs[i - 1];

    costs[i][0] += Math.min(prev2, prev3);
    costs[i][1] += Math.min(prev1, prev3);
    costs[i][2] += Math.min(prev1, prev2);
  }

  // as we build our "DP", the last array of the array of arrays should hold our answer
  return Math.min(costs[n - 1][0], costs[n - 1][1], costs[n - 1][2]);
};

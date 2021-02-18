// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
//
// Example 1:
//
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
//
// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // instantiate a dp array a length of the amount and fill it with the maximum possible number
  const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  // first element in the dp array is 0
  dp[0] = 0;

  // loop through the dp array
  // build the solution bottom up by solving subproblems, coins that equate all the way up to the amount
  for (let a = 1; a < amount + 1; a++) {
    for (let coin of coins) {
      // if our amount subtracted by the coin we are on right now has a remainder or is 0
      if (a - coin >= 0) {
        // add our current coin which is 1 and the subproblems
        dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
      }
    }
  }
  // if our amount is not the default value then we have coins that can add up to it, if not then return -1
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

// Time Complexity: O(len(coins) * amount)
// Space Complexity: O(amount) since we create a dynamic array with all the values of each coins that add up to that amount/index

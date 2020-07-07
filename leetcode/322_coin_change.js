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
var coinChange = function(coins, amount) {
    // instantiate a dp array a length of the amount and fill it with the maximum possible number
    const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    // first element in the dp array is 0
    dp[0] = 0;

    // loop through the dp array
    for (let i = 1; i <= amount; i++) {
        // loop through the coins
        for (let j = 0; j < coins.length; j++) {
            // if the current amount subtracted by the current coin is greater than 0
            if (i - coins[j] >= 0) {
                // take the minimum of the dp of current element - the coin element and add one, comparing with the existing Number.MAX_VALUE
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
            }
        }
    }
    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

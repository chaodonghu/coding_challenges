// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
//
//
//
// Example 1:
//
// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:
//
// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:
//
// Input: amount = 10, coins = [10]
// Output: 1
//
//
// Note:
//
// You can assume that
//
// 0 <= amount <= 5000
// 1 <= coin <= 5000
// the number of coins is less than 500
// the answer is guaranteed to fit into signed 32-bit integer

var change = function (amount, coins) {
  // each column/index in the dp array represents if we have a coin or combinations of coins that can add up to that column/index
  let dp = new Array(amount + 1).fill(0);

  // base case
  dp[0] = 1; // since we will always have one way to make up 0 (not selecting any coins)

  // Loop through the coins
  for (coin of coins) {
    // column represents the current coin since the coin cannot represent anything less
    // increase the column until we hit the maximum amount
    for (let col = coin; col <= amount; col++) {
      // the # of coins that make up this column will be the addition of the column minus the coin's value
      dp[col] += dp[col - coin];
    }
  }

  return dp[amount];
};

// amount = 5, coins = [1,2,5]
// each index presents the # of coins that make up that columns value
// [ 1, 0, 0, 0, 0, 0 ]
// [ 1, 1, 0, 0, 0, 0 ]
// [ 1, 1, 1, 0, 0, 0 ]
// [ 1, 1, 1, 1, 0, 0 ]
// [ 1, 1, 1, 1, 1, 0 ]
// [ 1, 1, 1, 1, 1, 1 ]
// [ 1, 1, 2, 1, 1, 1 ]
// [ 1, 1, 2, 2, 1, 1 ]
// [ 1, 1, 2, 2, 3, 1 ]
// [ 1, 1, 2, 2, 3, 3 ]
// [ 1, 1, 2, 2, 3, 4 ]

// Time: O(N * amount)
// Space O(amount) since we have a dp with each column representing the # of coins that make up that amount

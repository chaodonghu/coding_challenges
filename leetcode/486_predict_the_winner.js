/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  const dp = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i; j < n; ++j) {
    //   console.log("i", i);
    //   console.log("j", j);
      // when there is only one element left to pick
      if (i == j) {
        // set the dp to that element
        dp[i][j] = nums[i];
      } else {
        // the first player will choose the maximum net score either from the beginning or end of the array
        dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        // console.log("dp", dp[i][j]);
      }

    //   console.log("dp", dp);
    }
  }

  // dp[0][n-1]represents the maximum net difference player 1 can get over player 2
  // if it is positive or 0 (tie) then the first player can win
  return dp[0][n - 1] >= 0;
};

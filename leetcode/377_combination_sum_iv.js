/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // sort the numbers into increasing order
  nums.sort((a, b) => a - b);

  // each index in the array will present the # of combinations we can form for that index
  let dp = new Array(target + 1).fill(0);

  // go through all our indexes which will eventually lead up to our target
  for (let i = 1; i <= target; i++) {
    // loop through our numbers
    for (let num of nums) {
      // if our number is greater than i that means we could never achieve that target since the num is greater
      if (num > i) {
        break;
      }

      // if the num equals the index that means we can increase the # of combinations for that index
      if (num === i) {
        dp[i]++;
      }

      // the combination to form the current target is the current value + the compliment to the current num
      dp[i] = dp[i] + dp[i - num];
    }
  }

  return dp[dp.length - 1];
};
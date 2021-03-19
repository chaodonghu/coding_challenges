/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // create our dp array
  let dp = [];
  // loop through the nums array starting at index 1
  for (let i = 1; i < nums.length; i++) {
    // get the difference between the previous number and the current number
    let diff = nums[i - 1] - nums[i];
    // if the difference does not equal 0 then add it to our dp array
    if (diff !== 0) {
      dp.push(diff);
    }
  }
  // if our dp length is 0 then we only have 1 subsequence
  // [1, 1, 1] where all the numbers are the same, there is no increasing or decreasing difference
  if (!dp.length) return 1;

  // if we have a dp array then we will always have atleast a length of 2 subsequences
  // this is because the numbers' difference will not be equal to 0
  let count = 2;

  for (let i = 1; i < dp.length; i++) {
    // if we have a negative diff then a positive difference or the vice versa increase our count
    if ((dp[i - 1] > 0 && dp[i] < 0) || (dp[i - 1] < 0 && dp[i] > 0)) {
      count++;
    }
  }

  return count;
};

// Time: O(N) we have to loop through our entire nums array twice
// Space: O(N) since we can store up to all the differences between our nums

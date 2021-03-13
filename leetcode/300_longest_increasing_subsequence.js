/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  var dp = [];

  for (var i = 0; i < nums.length; i++) {
    // push 1 into the dp as there must be atleast one subsequence
    dp.push(1);
    // make another pointer and make it end at the length of the i
    for (var j = 0; j < i; j++) {
      // second pointer needs to be greater or equal to the first pointer
      // if the element is not greater then increase the pointer
      if (nums[j] < nums[i]) {
        // get the max of the subarrays (dp[i] and dp[j] + 1)
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // return the maximum in the array
  return Math.max(...dp)
}

// Time: O(N^2)
// Space: O(N) since we build a dp to be the size of the nums array with each element being the longest increasing subsequence up until that index

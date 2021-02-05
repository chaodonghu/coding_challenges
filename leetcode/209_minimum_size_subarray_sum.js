// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
//
//
//
// Example 1:
//
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:
//
// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:
//
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
//
//
// Constraints:
//
// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
//
//
// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (!nums || !nums.length) return 0;

  // instantiate our starting pointer and end pointer for our sliding window
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  for (end; end < nums.length; end++) {
    sum += nums[end];
    // if the sum is greater or equal then the target
    while (sum >= target) {
      // the minimum length is either the previous minimum or the current length of the sliding window
      // end pointer + 1 (since we start at 0 index) minus the start pointer
      minLength = Math.min(minLength, end + 1 - start);
      // we then increase the starting pointer while subtracting the starting pointers value from the sum
      // this is our new window
      sum -= nums[start++];
    }
  }

  return minLength != Number.MAX_SAFE_INTEGER ? minLength : 0;
};

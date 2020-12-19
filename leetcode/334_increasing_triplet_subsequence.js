// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:
//
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:
//
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
//
//
// Constraints:
//
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let i = Number.MAX_SAFE_INTEGER;
  let j = Number.MAX_SAFE_INTEGER;

  // loop through the numbers
  for (num of nums) {
    // if the current number is less than i (first pointer)
    if (num <= i) {
      i = num;
    } else if (num <= j) {
      // if num is less than j (second pointer)
      j = num;
    } else {
      // if the num is greater than i and j then return true
      return true;
    }
  }

  return false;
};

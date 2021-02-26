// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
//
// Return the shortest such subarray and output its length.
//
//
//
// Example 1:
//
// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:
//
// Input: nums = [1]
// Output: 0
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let end = -1;
  let start = 0;

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  while (right >= 0) {
    nums[left] >= max ? (max = nums[left]) : (end = left);
    nums[right] <= min ? (min = nums[right]) : (start = right);
    left++;
    right--;
  }

  return end - start + 1;
};

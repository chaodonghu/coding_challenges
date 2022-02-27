// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
//
//
//
// Example 1:
//
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
//
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = [];

  // instantiate two pointers
  let left = 0;
  let right = nums.length - 1;

  // while our two pointers don't cross
  while (left <= right) {
    // if the square of the left pointer numbers is greater than the square of the right pointer numbers
    // add the result of the square of the left numbers to the beginnng of the array
    if (nums[left] ** 2 > nums[right] ** 2) {
      result.unshift(nums[left] ** 2);
      left++;
    } else {
      // shrink our pointers and add the square of the right pointers
      result.unshift(nums[right] ** 2);
      right--;
    }
  }

  // we will always add the higher of the square of the two pointer numbers to the beginning of the array

  return result;
};

// Time: O(N)
// Space: O(N)

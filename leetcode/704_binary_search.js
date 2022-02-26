// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
//
//
// Example 1:
//
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
//
// Example 2:
//
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
//
//
// Note:
//
// You may assume that all elements in nums are unique.
// n will be in the range [1, 10000].
// The value of each element in nums will be in the range [-9999, 9999].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // instantiate two pointers
  let left = 0;
  let right = nums.length - 1;

  // while our left pointer is less than or equal the right pointer
  while (left <= right) {
    // set our mid
    let mid = Math.floor((right + left) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      // target is on right side of mid
      left = mid + 1;
    } else {
      // target is on left side of mid
      right = mid - 1;
    }
  }

  return -1;
};

// Time: O(log N)
// Space: O(1)

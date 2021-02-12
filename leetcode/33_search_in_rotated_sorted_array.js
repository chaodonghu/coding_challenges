// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  if (!nums.length) return -1;

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // if our mid equals our target then just return that index
    if (nums[mid] === target) {
      return mid;
    } else if (
      // (1) value of our index low is less than or equal to our target and the target is less than the value at the mid
      //     (we have an increasing portion and the target is less than any of this increasing portion)
      // (2) value of our index low is greater than the value at our index mid and the value at the index low is less than or equal to our target or the target is less than our nums mid
      (nums[low] <= target && target < nums[mid]) ||
      (nums[low] > nums[mid] && (nums[low] <= target || target < nums[mid]))
    ) {
      high = mid - 1;
    } else {
      // if the value of our index low is greater than our value at the index mid
      // move low pointer to the right of the mid

      // value of our index high is greater than our value at index mid
      low = mid + 1;
    }
  }
  return -1;
};

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

var search = function(nums, target) {
  if (nums.length === 0) return -1;

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    console.log('low', low);
    console.log('high', high);
    let mid = Math.floor((low + high) / 2);
    console.log('mid', mid);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      console.log('yur')
      if (nums[low] <= target <= nums[mid]) {
        // value of our index low is less than our value at index mid
        // move high pointer to the left of the mid
        high = mid - 1;
      } else {
        // if the value of our index low is greater than our value at the index mid
        // move low pointer to the right of the mid
        low = mid + 1;
      }
    } else {
      if (nums[mid] <= target <= nums[high]) {
        // value of our index high is greater than our value at index mid
        low = mid + 1;
      } else {
        // value of our index high is less than our value at index mid
        high = mid - 1;
      }
    }
  }
  return -1;
};

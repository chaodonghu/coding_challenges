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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    // our first half is sorted and our target is within this first sorted half
    // then search this first half
    if (
      nums[start] <= nums[mid] &&
      target <= nums[mid] &&
      target >= nums[start]
    ) {
      end = mid - 1;
    } else if (
      // if our second half is sorted and our target is within this second sorted half
      // then search this second half
      nums[mid] <= nums[end] &&
      target >= nums[mid] &&
      target <= nums[end]
    ) {
      start = mid + 1;
      // if our second half isn't sorted then sort the second half
    } else if (nums[end] <= nums[mid]) {
      start = mid + 1;
      // if our first half isn't sorted, then sort our first half
    } else if (nums[start] >= nums[mid]) {
      end = mid - 1;
    } else {
      return -1;
    }
  }

  return -1;
};

// Time: O(log n)
// Space: O(1)

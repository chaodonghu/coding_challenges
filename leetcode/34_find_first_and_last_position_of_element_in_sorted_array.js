// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// Follow up: Could you write an algorithm with O(log n) runtime complexity?
//
//
//
// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
//
// Input: nums = [], target = 0
// Output: [-1,-1]
//
//
// Constraints:
//
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];

  // do a binary search for the left most index
  var findLeftMostIndex = function (arr, key) {
    let left = 0;
    let right = arr.length - 1;

    let leftMostIndex = -1;

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      // if the mid's element is greater than the key then search the left side
      if (arr[mid] > key) {
        right = mid - 1;
      } else if (arr[mid] < key) {
        left = mid + 1;
      } else {
        // our arr[mid] equals the target, then keep searching for the left most element on the left side of the array
        leftMostIndex = mid;
        right = mid - 1;
      }
    }

    return leftMostIndex;
  };

  var findRightMostIndex = function (arr, key) {
    let left = 0;
    let right = arr.length - 1;

    let rightMostIndex = -1;

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (arr[mid] > key) {
        right = mid - 1;
      } else if (arr[mid] < key) {
        left = mid + 1;
      } else {
        // if our arr[mid] equals the target, then keep searching for the right most element on the right side of the array
        rightMostIndex = mid;
        left = mid + 1;
      }
    }

    return rightMostIndex;
  };

  return [findLeftMostIndex(nums, target), findRightMostIndex(nums, target)];
};

// Time: O(log N), we do a binary search twice, once for the left most index and another for the right most index
// Space: O(1)

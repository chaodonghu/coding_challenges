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
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  var findLeftIndex = function (arr, key) {
    let left = 0;
    let right = arr.length - 1;
    let leftMostIndex = -1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (arr[mid] > key) {
        right = mid - 1;
      } else if (nums[mid] < key) {
        left = mid + 1;
      } else {
        // occurance of the target num
        leftMostIndex = mid;
        // now keep searching the left portion
        right = mid - 1;
      }
    }

    return leftMostIndex;
  };

  var findHighIndex = function (arr, key) {
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
        // occurance of the target num
        rightMostIndex = mid;
        // now keep searching the left portion
        left = mid + 1;
      }
    }

    return rightMostIndex;
  };

  return [findLeftIndex(nums, target), findRightIndex(nums, target)];
};

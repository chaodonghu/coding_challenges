// Given an array, rotate the array to the right by k steps, where k is non-negative.
//
// Follow up:
//
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
//
//
// Example 1:
//
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:
//
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
//
//
// Constraints:
//
// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
var rotateArray = function (arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  let len = nums.length;
  // normalize the rotations
  k = k % len;

  // rotate the entire array
  rotateArray(nums, 0, len - 1);
  // rotate the array until k
  rotateArray(nums, 0, k - 1);
  // rotate the second half of the array after k
  rotateArray(nums, k, len - 1);
};

// Time: O(N)
// Space: O(1)

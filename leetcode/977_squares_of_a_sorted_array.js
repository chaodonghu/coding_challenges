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
var sortedSquares = function (A) {
  const res = [];

  // positive portion of array
  let i = 0;
  while (A[i] < 0) i++;

  // negative portion of array
  let j = i - 1;
  // j pointer should be greater than 0 (starting at left)
  // i pointer should be less than array (starting at right)
  while (j >= 0 || i < A.length) {
    // if the i pointer is greater than the length
    // if the negatation of the value of the right left pointer is less than or equal to the value of the right pointer
    if (i >= A.length || -A[j] <= A[i]) {
      // push to positive portion of array
      res.push(A[j--] ** 2);
    } else {
      // push to negative portion of array
      res.push(A[i++] ** 2);
    }
  }
  return res;
};

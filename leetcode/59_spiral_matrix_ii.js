// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
//
//
//
// Example 1:
//
//
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:
//
// Input: n = 1
// Output: [[1]]
//
//
// Constraints:
//
// 1 <= n <= 20

/**
 * @param {number[][]} n
 * @return {number[]}
 */
var generateMatrix = function (n) {
  let nums = Array(n).fill().map(() => Array(n).fill());

  let rowBegin = 0;
  let rowEnd = n - 1;
  let columnBegin = 0;
  let columnEnd = n - 1;
  let size = n * n;

  let counter = 1;

  // if we are in our boundaries
  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // traverse the top row from left to right
    for (let i = columnBegin; i <= columnEnd; i++) {
      nums[rowBegin][i] = counter;
      counter++;
    }
    rowBegin++;
    // traverse the right column from top to bottom
    for (let i = rowBegin; i <= rowEnd; i++) {
      nums[i][columnEnd] = counter;
      counter++;
    }
    columnEnd--;

    if (rowBegin <= rowEnd) {
      // traverse the bottom row from right to left
      for (let i = columnEnd; i >= columnBegin; i--) {
        nums[rowEnd][i] = counter;
        counter++;
      }
      rowEnd--;
      // traverse the left column from bottom to top
      for (let i = rowEnd; i >= rowBegin; i--) {
        nums[i][columnBegin] = counter;
        counter++;
      }
      columnBegin++;
    }
  }
  return nums;
};

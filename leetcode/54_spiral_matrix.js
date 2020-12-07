// Given an m x n matrix, return all elements of the matrix in spiral order.
//
//
//
// Example 1:
//
//
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//
//
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
//
//
// Constraints:
//
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let nums = [];
  if (!matrix || matrix.length === 0) {
    return nums;
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let size = matrix.length * matrix[0].length;

  while (nums.length < size) {
    // traverse the top row from left to right
    for (let i = left; i <= right && nums.length < size; i++) {
      nums.push(matrix[top][i]);
    }
    top++;
    // traverse the right column from top to bottom
    for (let i = top; i <= bottom && nums.length < size; i++) {
      nums.push(matrix[i][right]);
    }
    right--;
    // traverse the bottom row from right to left
    for (let i = right; i >= left && nums.length < size; i--) {
      nums.push(matrix[bottom][i]);
    }
    bottom--;
    // traverse the left column from bottom to top
    for (let i = bottom; i >= top && nums.length < size; i--){
      nums.push(matrix[i][left]);
    }
    left++;
  }
  return nums;
};

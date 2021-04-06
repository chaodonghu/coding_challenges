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
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let array = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  // go right first
  let dir = "r";

  // while we are in bounds in that the current top is less than or equal to the bottom
  // and the left is less than or equal to the right
  while (top <= bottom && left <= right) {
    if (dir === "r") {
      // if the direction is right traverse the top row from left to right
      for (let i = left; i <= right; i++) {
        array.push(matrix[top][i]);
      }
      // increase the top row index
      top++;
      // then go downwards
      dir = "d";
    } else if (dir === "d") {
      // if the direction is down then traverse the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        array.push(matrix[i][right]);
      }
      // decrease the right row index
      right--;
      // then go left
      dir = "l";
    } else if (dir === "l") {
      // if the direction is left then traverse the bottom row from right to left
      for (let i = right; i >= left; i--) {
        array.push(matrix[bottom][i]);
      }
      // decrease the bottom row index
      bottom--;
      // then go up
      dir = "u";
    } else if (dir === "u") {
      // if the direction is up then traverse the left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        array.push(matrix[i][left]);
      }
      // increase the left col index
      left++;
      dir = "r";
    }
  }

  return array;
};

// Time: O(N * M)
// Space: O(N * M)

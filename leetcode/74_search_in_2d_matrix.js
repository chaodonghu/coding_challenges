// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
//
//
// Example 1:
//
//
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:
//
//
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  // start at the end of each row and go from right to left (greatest number in the row to the smallest number in the row)
  let row = 0;
  let column = matrix[0].length - 1;

  // while we are in bounds
  // row is not greater then the number of rows in the matrix since we always increase the row index
  // column is greater or equal then 0 since we always decrease the column index
  while (row <= matrix.length - 1 && column >= 0) {
    if (matrix[row][column] > target) {
      // stay in the row and decrease the column
      column--;
    } else if (matrix[row][column] < target) {
      row++;
    } else {
      // the current element is neither greater or less then the target therefore it must be equal to the target
      return true;
    }
  }

  return false;
};

// Time Complexity: O(log M * N), the worst case is when the target is at the last row, first column of the matrix
// Space Complexity: O(1)

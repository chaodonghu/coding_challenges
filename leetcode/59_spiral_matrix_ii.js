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
  let nums = Array(n)
    .fill()
    .map(() => Array(n).fill());

  // setup our pointers
  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;

  let counter = 1;

  // if we are in our boundaries
  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    // traverse the top row from left to right
    for (let i = leftColumn; i <= rightColumn; i++) {
      nums[topRow][i] = counter;
      counter++;
    }
    // increase the row begin, next row
    topRow++;

    // traverse the right column from top to bottom
    for (let i = topRow; i <= bottomRow; i++) {
      nums[i][rightColumn] = counter;
      counter++;
    }

    // decrease the column end
    rightColumn--;

    // if we haven't overlapped our two row pointers
    if (topRow <= bottomRow) {
      // traverse the bottom row from right to left
      for (let i = rightColumn; i >= leftColumn; i--) {
        nums[bottomRow][i] = counter;
        counter++;
      }
      // decrease the row end
      bottomRow--;

      // traverse the left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        nums[i][leftColumn] = counter;
        counter++;
      }

      // increase the column begin
      leftColumn++;
    }
  }
  return nums;
};

// Time: O(N)
// Space: O(N)

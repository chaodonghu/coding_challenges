// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
//
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascalsTriangle = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    // instantiate row of the length being the index + 1
    // eg. on row 2 you should have an array of 2 elements
    let row = new Array(i + 1);

    // first and last element in the row will always be 1;
    row[0] = 1;
    row[row.length - 1] = 1;

    // go through the row's length omitting first and last element in row
    for (let j = 1; j < row.length - 1; j++) {
      // the row above has to be the row's index - 1
      let rowAbove = pascalsTriangle[i - 1];
      // the current element in the current row is the sum of the current index and last index of the row above
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }

    // add the row to the index in pascals triangle
    pascalsTriangle[i] = row;
  }

  return pascalsTriangle;
};

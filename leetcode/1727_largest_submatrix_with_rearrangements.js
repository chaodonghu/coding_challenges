/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  // count from the base up
  let width = matrix.length;
  let height = matrix[0].length;

  let answer = 0;

  // start at second row
  for (let i = 1; i < width; i++) {
    for (let j = 0; j < height; j++) {
      // if we have a cell then increase that cell by the previous row above it to represent it's height
      if (matrix[i][j]) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }
  }

  // go down each row
  for (let i = 0; i < width; i++) {
    // sort the row in ascending order, simulates the movement of columns
    let row = matrix[i].sort((a, b) => b - a);

    // go down each column
    for (let j = 0; j < height; j++) {
      // determine if this current column is greater than the max
      // we add 1 to j (width) * the max height we can make from the current column to determine the area
      answer = Math.max(answer, (j + 1) * row[j]);
    }
  }

  return answer;
};

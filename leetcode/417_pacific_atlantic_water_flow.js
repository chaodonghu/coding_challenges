/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
  if (matrix.length === 0) return [];

  // we will have all cells reachable by the pacific ocean
  const pacific = [];
  // we will have all cells reachable by the atlantic ocean
  const atlantic = [];
  const result = [];

  // fill each pacific and atlantic matrix will empty 0s
  for (let row = 0; row < matrix.length; row++) {
    pacific[row] = Array(matrix[0].length).fill(0);
    atlantic[row] = Array(matrix[0].length).fill(0);
  }

  // top and bottom
  for (let col = 0; col < matrix[0].length; col++) {
    dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, matrix.length - 1, col, Number.MIN_SAFE_INTEGER, atlantic);
  }

  // left and right
  for (let row = 0; row < matrix.length; row++) {
    dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, row, matrix[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  console.log('pacific', pacific);
  console.log('atlantic', atlantic);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (pacific[row][col] === 1 && atlantic[row][col] === 1) {
        result.push([row, col]);
      }
    }
  }

  return result;
};

function dfs(matrix, row, col, previous, ocean) {
  // if we're looking at a valid matrix position
  if (!isValid(matrix, row, col)) return;

  // ocean can't reach
  if (matrix[row][col] < previous) return;

  // the ocean was already here
  if (ocean[row][col] === 1) return;

  ocean[row][col] = 1;
  dfs(matrix, row + 1, col, matrix[row][col], ocean);
  dfs(matrix, row - 1, col, matrix[row][col], ocean);
  dfs(matrix, row, col + 1, matrix[row][col], ocean);
  dfs(matrix, row, col - 1, matrix[row][col], ocean);
}

function isValid(matrix, row, col) {
  const rowIsValid = row >= 0 && row < matrix.length;
  const colIsValid = col >= 0 && col < matrix[0].length;
  return rowIsValid && colIsValid;
}

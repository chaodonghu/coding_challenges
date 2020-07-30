/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let sum = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      sum += Math.min(grid[i][j], grid[i + 1][j]);
    }
  }

  console.log('sum', sum);
};

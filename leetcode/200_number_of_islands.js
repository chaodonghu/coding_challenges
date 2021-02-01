// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count += dfs(grid, row, col);
      }
    }
  }

  return count;
};

var dfs = function (grid, row, col) {
  // if we are out of bounds or if we reached a 0
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] === "0"
  ) {
    return 0;
  }

  // mark that we have been there
  grid[row][col] = "0";
  // left
  dfs(grid, row - 1, col);
  // right
  dfs(grid, row + 1, col);
  // bottom
  dfs(grid, row, col - 1);
  // top
  dfs(grid, row, col + 1);

  return 1;
};

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
//
// The area of an island is the number of cells with a value 1 in the island.
//
// Return the maximum area of an island in grid. If there is no island, return 0.
//
//
//
// Example 1:
//
//
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:
//
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
//
//
// Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  // loop through the entire matrix
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // if the coordinate is an island, take the max of this iteration of dfs or the current max
      if (grid[row][col] === 1) {
        maxArea = Math.max(maxArea, dfs(row, col, grid));
      }
    }
  }

  return maxArea;
};

var dfs = (row, col, grid) => {
  // if we're out of bounds or if the cell we're on isn't an island, return 0
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === 0
  )
    return 0;

  // mark the current cell as 0, since we visited it
  grid[row][col] = 0;

  // the cell is an island so add one to our count then search up, down, right and left
  return (
    1 +
    dfs(row + 1, col, grid) +
    dfs(row - 1, col, grid) +
    dfs(row, col + 1, grid) +
    dfs(row, col - 1, grid)
  );
};

// Time: O(R * C)
// Space: O(R * C)

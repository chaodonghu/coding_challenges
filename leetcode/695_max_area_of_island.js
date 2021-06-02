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
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === 0
  )
    return 0;

  grid[row][col] = 0;

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

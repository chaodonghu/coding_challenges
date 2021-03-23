var getMaximumGold = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col]) {
        count = Math.max(count, maxGoldDfs(grid, row, col));
      }
    }
  }
  return count;
};

function maxGoldDfs(grid, row, col) {

  // if we are out of bounds or if the gold at the cell is 0 then return 0
  if (
    row >= grid.length ||
    col >= grid[0].length ||
    row < 0 ||
    col < 0 ||
    grid[row][col] === 0
  ) {
    return 0;
  }

  let temp = grid[row][col];
  // temporarily mark this as visited
  grid[row][col] = 0;
  // our count is our current element
  let count = temp;

  let left = maxGoldDfs(grid, row - 1, col);
  let right = maxGoldDfs(grid, row + 1, col);
  let up = maxGoldDfs(grid, row, col - 1);
  let down = maxGoldDfs(grid, row, col + 1);

  // revert our element back to it's original value
  grid[row][col] = temp;
  // add to our count the maximum of travelling either left, right, up or down
  count += Math.max(left, right, up, down);

  return count;
}

// Time: O(N * M) since we visit all rows and columns atleast once
// Space: O(1) since we modify everything in place

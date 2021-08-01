/**
 * @param {number[][]} grid
 * @return {number}
 */

// list out all the possible directions
const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var largestIsland = function (grid) {
  if (!grid || !grid.length) return 0;

  let m = grid.length;
  let n = grid[0].length;
  let max = Number.MAX_VALUE;
  // paint the islands with a unique integer, start at 2 since 1 already indicates an island
  let uniqueIsland = 2;
  let map = {};

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // if we are at a 1 then do a dfs to find the area of the island
      if (grid[row][col] === 1) {
        const area = dfs(grid, row, col, uniqueIsland);
        // update our max
        max = Math.max(area, max);
        // add to our map the current unique integer and it's area
        map[uniqueIsland] = area;
        // increment the unique island count
        uniqueIsland++;
      }
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // if we are at a 1 then do a dfs to find the area of the island
      if (grid[row][col] === 0) {
        let set = new Set();
        let cur = 1;

        // visit all of it's neighbours if it is not an island
        for (let [x, y] of DIRECTIONS) {
          const xDir = x + row;
          const yDir = y + col;

          // bound check
          if (xDir < 0 || xDir >= m || yDir < 0 || yDir >= n) continue;

          const islandId = grid[xDir][yDir];
          // if we haven't visited the island yet and the islandId is greater than 1 then add it to our set, and increase the current area by the area stored in our map
          if (islandId > 1 && !set.has(islandId)) {
            set.add(islandId);
            cur += map[islandId];
          }
        }
        // update our max
        max = Math.max(max, cur);
      }
    }
  }

  return max;
};

function dfs(grid, row, col, num) {
  // bound check
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return 0;
  }

  // if we encounter a 0 or we loop back onto the unique island then return 0
  if (grid[row][col] === 0 || grid[row][col] === num) return 0;

  // set the current cell to num
  grid[row][col] = num;
  return (
    1 +
    dfs(grid, row + 1, col, num) +
    dfs(grid, row - 1, col, num) +
    dfs(grid, row, col + 1, num) +
    dfs(grid, row, col - 1, num)
  );
}

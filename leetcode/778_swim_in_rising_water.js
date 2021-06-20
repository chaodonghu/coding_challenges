/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  // keep track of where we have visited
  let visited = new Set();
  let time = 0;
  let N = grid.length;
  // go left, down, right or up
  let dirs = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const dfs = (r, c) => {
    // if we are out of bounds
    // if the time is less than the current cell
    // if we have already visited the cell
    if (
      r < 0 ||
      r > N - 1 ||
      c < 0 ||
      c > N - 1 ||
      time < grid[r][c] ||
      visited.has(r * N + c)
    ) {
      return;
    }
    visited.add(r * N + c);
    for (let [rr, cc] of dirs) dfs(r + rr, c + cc);
  };

  // while the visited does not have our last coordinate, clear it then do a dfs again on the 0, 0
  while (!visited.has(N * N - 1)) {
    console.log('visited', visited);
    visited.clear();
    dfs(0, 0);
    time++;
  }

  return time - 1;
};

// Time: O(N^2)
// Space: O(N^2)

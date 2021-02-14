// In an N by N square grid, each cell is either empty (0) or blocked (1).
//
// A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:
//
// Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
// C_1 is at location (0, 0) (ie. has value grid[0][0])
// C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
// If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
// Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.
//
//
//
// Example 1:
//
// Input: [[0,1],[1,0]]
//
//
// Output: 2
//
// Example 2:
//
// Input: [[0,0,0],[1,1,0],[1,1,0]]
//
//
// Output: 4
//
//
//
// Note:
//
// 1 <= grid.length == grid[0].length <= 100
// grid[r][c] is 0 or 1


/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

// changing the coordinates of the grid
var shortestPathBinaryMatrix = function (grid) {
  if (!grid.length) return -1;
  // if the grid starts at 1 then we have no possible path
  if (grid[0][0] === 1) return -1;

  // moving directions
  const DIR = [
    // up
    [0, 1],
    // down
    [0, -1],
    // right
    [1, 0],
    // left
    [-1, 0],
    // diagonals
    // right up
    [1, 1],
    // left up
    [-1, 1],
    // right down
    [1, -1],
    // left down
    [-1, -1],
  ];

  const m = grid.length;
  const n = grid[0].length;

  // our target is the last coordinate in the grid (the bottom right most cell)
  const target = { row: n - 1, col: m - 1 };

  const queue = [[0, 0]];
  grid[0][0] = 1;

  let path = 0;

  while (queue.length) {
    path++;

    for (let i = queue.length; i > 0; i--) {
      // get the first out of the queue
      let [row, col] = queue.shift();

      if (row === target.row && col === target.col) {
        return path;
      }

      for (d of directions) {
        let nextRow = row + d[0];
        let nextCol = col + d[1];

        // we are out of bounds
        if (nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n) {
          continue;
        }

        if (grid[nextRow][nextCol] === 0) {
          queue.push([nextRow, nextCol]);
        }
        grid[nextRow][nextCol] = 1;
      }
    }
  }

  return -1;
};

// With extra space
var shortestPathBinaryMatrix = function (grid) {
  /*
       Classic BFS with level traversal.
       Time:  O(m*n)
       Space: O(m*n)
    */

  // Edge cases
  //   empty grid
  if (grid.length == 0) {
    return -1;
  }
  //   blocked starting point
  if (grid[0][0] == 1) {
    return -1;
  }

  //
  const m = grid.length;
  const n = grid[0].length;

  // moving directions
  const DIR = [
    // up
    [0, 1],
    // down
    [0, -1],
    // right
    [1, 0],
    // left
    [-1, 0],
    // diagonals
    // right up
    [1, 1],
    // left up
    [-1, 1],
    // right down
    [1, -1],
    // left down
    [-1, -1],
  ];

  // define target
  const target = { row: m - 1, col: n - 1 };

  // preventing double visits
  // could be replaced with changing original grid
  // by changing visited 0 cells to 1
  const seen = new Set();
  const visited = (row, col) => {
    // we need to multiply since 2, 1 will equal 1, 2
    // multiple it so we are outside the grid
    seen.add(row * n + col);
    return [row, col];
  };

  const q = [visited(0, 0)];

  let path = 0;

  while (q.length > 0) {
    path++;
    // level traversal: in our case level it is steps in the grid
    for (let i = q.length; i > 0; i--) {
      let [row, col] = q.shift();

      // if target found - return current step
      // since it is BFS the very first occurences will be
      // at the shortest path
      if (row == target.row && col == target.col) {
        return path;
      }

      for (let d of DIR) {
        let nr = row + d[0];
        let nc = col + d[1];

        // bounds check
        if (nr < 0 || nc < 0 || nr >= m || nc >= n) {
          continue;
        }

        // ignore visited
        if (seen.has(nr * n + nc)) {
          continue;
        }

        // visit only empty cells
        if (grid[nr][nc] == 0) {
          q.push(visited(nr, nc));
        }
      }
    }
  }

  // all possible ways have been checked and no target achieved
  return -1;
};

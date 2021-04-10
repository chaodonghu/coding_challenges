/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (!matrix.length) return 0;
  let m = matrix.length;
  let n = matrix[0].length;
  // memoize where we have already visited and the count at that cell
  let visited = {};

  var dfs = function (i, j) {
    // if we have already visited the cell, return the count at that cell
    if (visited[`${i}-${j}`]) return visited[`${i}-${j}`];
    let answer = 1;
    // go in all directions, up, down, left, right
    let dirs = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ];

    for (let [x, y] of dirs) {
      // for each direction, generate new coordinates
      let newRow = i + x;
      let newCol = y + j;

      // if we are in bounds and the next cell is greater than the current cell
      if (
        newRow >= 0 &&
        newRow < matrix.length &&
        newCol >= 0 &&
        newCol < matrix[0].length &&
        matrix[i][j] < matrix[newRow][newCol]
      ) {
        // add one to the result and then do a dfs on that cell with the current cell added
        answer = Math.max(answer, dfs(newRow, newCol) + 1);
        // add the coordinates the visited map
        visited[`${i}-${j}`] = answer;
      }
    }

    return answer;
  };

  // go through our matrix and do a dfs on each cell, adding the value to our count
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count = Math.max(count, dfs(i, j));
    }
  }

  return count;
};

// Time: O(M * N) as the worst case we visit every cell and the longest path is either 1 or the length of the entire matrix
// Space: O(M * N) since we need to store the out degrees of each level of leaves

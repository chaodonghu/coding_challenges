// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
//
// In one shift operation:
//
// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.
//
//
//
// Example 1:
//
//
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]
// Example 2:
//
//
// Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// Example 3:
//
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// Output: [[1,2,3],[4,5,6],[7,8,9]]
//
//
// Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m <= 50
// 1 <= n <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  if (!grid.length || k < 1) return grid;

  // first flatten the array
  let flattened = grid.reduce((acc, el) => {
    return acc.concat(el);
  }, []);

  // now that we have one array, just rotate it k times
  for (let i = 0; i < k; i++) {
    // pop the last element of the array and add it to the beginning, essentially rotating it
    flattened.unshift(flattened.pop());
  }

  // turn it back into a grid
  let res = [];
  // size of the grid is the row length
  let size = grid[0].length;
  for (let i = 0; i < flattened.length; i = i + size) {
    // slice the flattended array by the number of elements in each row
    res.push(flattened.slice(i, i + size));
  }
  return res;
};

// Time: O(N)
// Space: O(N)

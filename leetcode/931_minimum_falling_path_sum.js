/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let dp = new Array(m).fill(0).map((x) => new Array(n).fill(0));

  // fill in first row
  for (let col = 0; col < m; col++) {
    dp[0][col] = matrix[0][col];
  }

  // console.log('dp', dp);

  for (let row = 1; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // if our column is at 0 that means we cannot have reached this cell from the top left
      if (col === 0) {
        dp[row][col] =
          matrix[row][col] + Math.min(dp[row - 1][col], dp[row - 1][col + 1]);
      }
      // if our column is at the most right column, we cannot have reached this cell from the top right
      else if (col === n - 1) {
        dp[row][col] =
          matrix[row][col] + Math.min(dp[row - 1][col], dp[row - 1][col - 1]);
      } else {
        // its a normal cell in the middle of the row
        dp[row][col] =
          matrix[row][col] +
          Math.min(
            dp[row - 1][col],
            dp[row - 1][col - 1],
            dp[row - 1][col + 1]
          );
      }
    }
  }

  return Math.min(...dp[m - 1]);
};

// Time: O(N)(M)
// Space; O(N)(M) // since we have a dp that represents the minimum sum until that point of the cell

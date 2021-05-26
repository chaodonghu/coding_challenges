/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  // have an array of all the possible directions our knight can move
  const dirs = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];
  // create a 3 level dp, the index of the level represents the move #
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => Array(n).fill(0)));

  // since we start at a coordinate, we can mark our probability of hitting that first coordinate a 1
  dp[0][row][column] = 1;

  // start at move 1, since move 0 has already been established
  for (let move = 1; move <= k; move++) {
    for (let rowMatrix = 0; rowMatrix < n; rowMatrix++) {
      for (let col = 0; col < n; col++) {
        for (let [dx, dy] of dirs) {
          let x = dx + rowMatrix;
          let y = dy + col;
          // if our x and y after adding our direction is in bounds
          if (x >= 0 && x < n && y >= 0 && y < n) {
            // add to our dp array at the current move, destination x and destination y our possibility of hitting having a valid move from the previous move's coordinate
            // out of 8 possible moves
            dp[move][x][y] += dp[move - 1][rowMatrix][col] / 8;
          }
        }
      }
    }
  }

  let probability = 0;

  // add up the probability's at the K move
  for (let rowMatrix = 0; rowMatrix < n; rowMatrix++) {
    for (let col = 0; col < n; col++) {
      probability += dp[k][rowMatrix][col];
    }
  }

  return probability;
};

// Time: O(N^2 * K), N comes from the inner two loops which iterate through our N * N grid and K which is the number of moves
// Space; O(N^2)

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  // find out which index has the highest frequency of edges
  let freq = new Map();

  // iterate through each row of the wall, and keep a running total, then update the frequency of each edge's index in our frequency map
  for (let row = 0; row < wall.length; row++) {
    let currentRow = wall[row];
    let sum = currentRow[0];

    for (let i = 1; i < currentRow.length; i++) {
      sum += currentRow[i];
      freq.set(sum, (freq.get(sum) || 0) + 1);
    }
  }

  let best = 0;

  // our best will be the number of rows that have an edge on that certain index
  // meaning if we cut at that index, the cut will not affect that row
  for (let [key, value] of freq) {
    if (value > best) {
      best = value;
    }
  }

  // return at most which rows will be affected
  return wall.length - best;
};

// Time: O(N) where N is the number of bricks in the wall
// Space: O(M) where M is the width of the wall

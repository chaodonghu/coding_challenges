/**
 * @param {number} n
 * @return {number}
 */

var formatBoard = (slate) => {
  let result = [];

  for (let col = 0; col < slate.length; col++) {
    let row = new Array(slate.length).fill(".");
    row[slate[col]] = "Q";
    result.push(row.join(""));
  }

  return result;
};

var solveNQueens = function (n) {
  // global result
  const result = [];

  const dfs = (index, n, slate) => {
    // backtracking case;
    // the indexes represent the rows, so our last queen will be the row above us
    let lastQ = index - 1;

    // go up to our last queen's index
    for (let prevQ = 0; prevQ < lastQ; prevQ++) {
      // queens cannot be on the same column
      if (slate[prevQ] === slate[lastQ]) return;

      // check if the queens are on the same diagonal;
      let rowDiff = Math.abs(prevQ - lastQ);
      let colDiff = Math.abs(slate[prevQ] - slate[lastQ]);

      if (rowDiff === colDiff) return;
    }

    // if we reached the boundaries of the row
    if (index === n) {
      result.push(slate.slice());
      return;
    }

    // go through every column of the row
    for (let col = 0; col < n; col++) {
      // push the col on the slate
      slate.push(col);
      // go to the next row
      dfs(index + 1, n, slate);
      slate.pop();
    }

    // each index of the slate will represent the row and the value at the index represents the col the queen is at
  };

  dfs(0, n, []);

  return result.map((slate) => formatBoard(slate));
};

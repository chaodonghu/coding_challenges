/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let seen = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cell = board[i][j];
      if (cell != ".") {
        let colCell = `cell: ${j} ${cell}`;
        let rowCell = `row: ${i} ${cell}`;
        // subbox of 9 cells, have the index of the subbox
        let subBoxCell = `subBox: ${parseInt(i / 3)}-${parseInt(
          j / 3
        )} ${cell}`;

        // if our set already contains the col cell, the row cell or the subbox cell then return false
        if (!seen.has(colCell) && !seen.has(rowCell) && !seen.has(subBoxCell)) {
          seen.add(colCell);
          seen.add(rowCell);
          seen.add(subBoxCell);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

// Time: O(1), iteration of all 81 cells
// Space: 0(1), we use a set

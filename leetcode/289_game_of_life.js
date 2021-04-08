/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let gameOfLife = (board) => {
  // go through our board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // get the live cells surrounding the cell we are currently on
      let liveCells = aliveNeighbors(board, i, j);
      // if the current cell is live and has less than 2 live neighbours or more then 3 live neighbours then it dies
      if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
        board[i][j] = 2;
      }
      // if the current cell is dead and it has more than 3 live neighbours then it becomes live
      if (board[i][j] === 0 && liveCells === 3) {
        board[i][j] = 3;
      }
      // leave any live cell with 2 or 3 live neighbours
    }
  }

  // go through our board and modulo every number by 2, all 1's and 3's will now turn into 1, all 2's will now be dead
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = board[i][j] % 2;
    }
  }
};

let aliveNeighbors = (board, i, j) => {
  let count = 0;
  let indexes = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  for (let [x, y] of indexes) {
    // if we are out of bounds then skip
    if (
      x + i < 0 ||
      x + i > board.length - 1 ||
      y + j < 0 ||
      y + j > board[0].length - 1
    ) {
      continue;
    }
    // if we have a neighbour that is live (it can be 1 or it can be 2 (it was live now it's dead))
    if (board[x + i][y + j] === 1 || board[x + i][y + j] === 2) count++;
  }
  return count;
};

// Time: O(M*N)
// Space: O(1)

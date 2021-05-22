/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
  this.len = n;

  // these values will increment and decrement depending on the player
  // when one of these values equals the size of the board, then a player has won
  this.diag = 0;
  this.antiDiag = 0;
  // rows will store the value of the index of the entire row
  this.rows = new Array(n).fill(0);
  // cols will the the value at the index of the entire column
  this.cols = new Array(n).fill(0);
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  // our i will either increment or decrement the row/col/diagonal or antidiagonal
  const i = player === 1 ? 1 : -1;

  // increment the value at the row
  this.rows[row] += i;
  // increment the value at the col
  this.cols[col] += i;
  // if we place it on a square where it connects the diagonal that goes from top left to bottom right
  if (row === col) this.diag += i;
  // if we place it on a square where it connects the diagonal that goes from bottom left to top right
  if (col === this.len - row - 1) this.antiDiag += i;

  // if at any row, going left to right
  // if at any col, going top to bottom,
  // if at any diagonal from top left to bottom right
  // if at any antidiagonal from bottom left to top right
  // is absolutely equal to the length of the tictactoe then return that player
  if (
    Math.abs(this.rows[row]) === this.len ||
    Math.abs(this.cols[col]) === this.len ||
    Math.abs(this.diag) === this.len ||
    Math.abs(this.antiDiag) === this.len
  ) {
    return player;
  }

  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

// Time: O(1)
// Space: O(N) since the size of our rows and cols will be the size of N board

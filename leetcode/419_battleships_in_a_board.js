// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?
/**
 * @param {character[][]} board
 * @return {number}
 */

// Naive solution
var countBattleships = function (board) {
  let count = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      count += sink(board, row, col);
    }
  }

  return count;
};

var sink = function (board, row, col) {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] === "."
  ) {
    return 0;
  }

  board[row][col] = ".";
  sink(board, row + 1, col);
  sink(board, row - 1, col);
  sink(board, row, col + 1);
  sink(board, row, col - 1);

  return 1;
};
// Time: O(N x M) since we traverse through the entire matrix
// Space: O(1)

// Logical solution -> we take into account that we traverse the matrix from left to right, top to bottom
var countBattleships = function (board) {
  let count = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === ".") {
        continue;
      }

      // if we're past the first row and the previous row has a ship on it (this ship is placed vertical)
      if (row > 0 && board[row - 1][col] === "X") {
        continue;
      }

      // if we're past the first column and the previous col has a ship on it (this ship is placed horizontal)
      if (col > 0 && board[row][col - 1] === "X") {
        continue;
      }

      count++;
    }
  }

  return count;
};
// Time: O(N x M) since we traverse through the entire matrix
// Space: O(1)

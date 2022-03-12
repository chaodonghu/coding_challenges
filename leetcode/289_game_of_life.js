// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
//
// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
//
// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
//
//
//
// Example 1:
//
//
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:
//
//
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
//
//
// Constraints:
//
// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
//
//
// Follow up:
//
// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// utilize 2 new integers to represent intermediatary states
// Mapping
// 1 -> 2 // live then dead
// 0 -> 3 // dead then live

let gameOfLife = (board) => {
  // go through each cell in our board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // get the live cells surrounding the cell we are currently on, utilize helper function
      let aliveNeighborsCount = aliveNeighbors(board, row, col);
      // if the current cell is live and has less than 2 live neighbours or more then 3 live neighbours then it dies
      if (
        board[i][j] === 1 &&
        (aliveNeighborsCount < 2 || aliveNeighborsCount > 3)
      ) {
        board[i][j] = 2;
      }
      // if the current cell is dead and it has more than 3 live neighbours then it becomes live
      if (board[i][j] === 0 && aliveNeighborsCount === 3) {
        board[i][j] = 3;
      }
      // leave any live cell with 2 or 3 live neighbours
    }
  }

  // remove all the 2 and 3 intermediatary states
  // go through our board and modulo every number by 2, all 1's and 3's will now turn into 1, all 2's will now be dead
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = board[i][j] % 2;
    }
  }
};

let aliveNeighbors = (board, rowIndex, colIndex) => {
  let aliveNeighborsCount = 0;
  let directions = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  for (let [x, y] of directions) {
    // if we are out of bounds then skip
    if (
      x + rowIndex < 0 ||
      x + rowIndex > board.length - 1 ||
      y + colIndex < 0 ||
      y + colIndex > board[0].length - 1
    ) {
      continue;
    }
    // if we have a neighbour that is live (it can be 1 or it can be 2 (it was live now it's dead))
    if (
      board[x + colIndex][y + rowIndex] === 1 ||
      board[x + rowIndex][y + colIndex] === 2
    )
      aliveNeighborsCount++;
  }
  return aliveNeighborsCount;
};

// Time: O(M*N)
// Space: O(1)

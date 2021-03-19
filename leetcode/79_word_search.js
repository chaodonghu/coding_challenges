// Given an m x n board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
//
//
// Example 1:
//
//
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:
//
//
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:
//
//
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
//
//
// Constraints:
//
// m == board.length
// n = board[i].length
// 1 <= m, n <= 200
// 1 <= word.length <= 103
// board and word consists only of lowercase and uppercase English letters.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var dfs = function (board, count, row, col, word) {
  // if our count equals the word length then we have found the word
  if (count === word.length) return true;

  // if we are out of bounds or if the cell we are at does not equal the word character at as we traverse the word return false
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== word.charAt(count)
  )
    return false;

  let temp = board[row][col];
  // temporarily make the current cell we already visited
  board[row][col] = "*";
  // go down, up, left, right
  let found =
    dfs(board, count + 1, row + 1, col, word) ||
    dfs(board, count + 1, row - 1, col, word) ||
    dfs(board, count + 1, row, col - 1, word) ||
    dfs(board, count + 1, row, col + 1, word);
  // revert our changed cell
  board[row][col] = temp;
  return found;
};

var exist = function (board, word) {
  // loop through every cell of our matrix
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // if we are at the first letter of the word and we can find the rest of the word's character by dfs
      if (board[i][j] === word.charAt(0) && dfs(board, 0, i, j, word)) {
        return true;
      }
    }
  }
  return false;
};

// Time: O(N * 3^L) where N is the number of cells in the board and L is the length of the word to be matched. We at most go in 3 directions from where we started since we will never go back in the direction we came from
// Space: O(L), the maximum call stack in recursion will be the length of the word

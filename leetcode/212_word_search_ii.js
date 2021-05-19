// Given an m x n board of characters and a list of strings words, return all words on the board.
//
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
//
//
//
// Example 1:
//
//
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
// Example 2:
//
//
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []
//
//
// Constraints:
//
// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

// Approach 1: DFS
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let result = new Set();
  for (word of words) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (
          board[row][col] === word.charAt(0) &&
          dfs(board, 0, row, col, word)
        ) {
          result.add(word);
        }
      }
    }
  }

  return [...result];
};

var dfs = function (board, count, row, col, word) {
  if (word.length === count) return true;

  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    word.charAt(count) !== board[row][col]
  ) {
    return false;
  }

  let temp = board[row][col];

  board[row][col] = "*";
  let found =
    dfs(board, count + 1, row + 1, col, word) ||
    dfs(board, count + 1, row - 1, col, word) ||
    dfs(board, count + 1, row, col + 1, word) ||
    dfs(board, count + 1, row, col - 1, word);

  board[row][col] = temp;
  return found;
};

// Approach 2: Backtracking with trie
var findWords = function (board, words) {
  let res = [];

  var buildTrie = function () {
    const root = {};
    for (let w of words) {
      let node = root;
      for (let char of w) {
        if (!node[char]) node[char] = {};
        node = node[char];
      }
      node.word = w;
    }
    return root;
  };

  // build the trie with each node nested with each character, and at the leaf have the word

  function search(node, i, j) {
    // if we reached the leaf node, and that node has a word property, push that into our result
    if (node.word) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    // if we are out of bounds, return
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    // if the node has already been visited or if the character does not match any character in our words then return
    if (node[board[i][j]] == null) return;

    // dfs on our trie
    const c = board[i][j];
    board[i][j] = "#"; // mark visited
    search(node[c], i + 1, j);
    search(node[c], i - 1, j);
    search(node[c], i, j + 1);
    search(node[c], i, j - 1);
    board[i][j] = c; // reset
  }

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return res;
};

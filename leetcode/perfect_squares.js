/*

1. Find all the perfect squares in the board representation below. A perfect square is number made by squaring a whole number, i.e. the square root of a whole number that is also a whole number. 4x4 = 16, 5x5 = 25, etc.

2. Find all groups of perfect squares. A group consists of any perfect squares that are directly next to one another. A valid group could consist of perfect squares above, left, right, and below the current perfect square. Diagonally adjacent squares do not count.

*/

const board = [
  [1, 3, 4, 6, 7],
  [9, 4, 2, 9, 5],
  [5, 1, 2, 9, 3],
  [2, 3, 8, 1, 4],
  [9, 4, 6, 8, 2],
];

// example block
// block = {
//   value: 4,
//   row: 0,
//   col: 2
// };

// example output
// output = [
//    block1,
//    block2,
//    block3
// ];

// example output for part 2
// output = [
//    [{block1}, {block2}], // group1
//    [{block3}, {block4}], // group2
// ]

// [ [1,9, 4, 1], [4], [9, 9, 1, 4], [9, 4]]

// const findPerfectSquares = (board) => {
//   let output = [];
//   for (let row = 0; row < board.length; row++) {
//     for (let col = 0; col < board[row].length; col++) {
//       if (Math.sqrt(board[row][col]) % 1 === 0) {
//         const block = {
//           value: board[row][col],
//           row,
//           col,
//         }
//         output.push(block);
//       }
//     }
//   }

//   return output;
// }

// const solution = findPerfectSquares(board);

const findPerfectSquares = (board) => {
  let output = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (Math.sqrt(board[row][col]) % 1 === 0) {
        output.push(dfs(board, row, col, []));
      }
    }
  }

  return output;
};

const dfs = (board, row, col, blockArr) => {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    Math.sqrt(board[row][col]) % 1 !== 0
  ) {
    return blockArr;
  }

  let temp = board[row][col];
  board[row][col] = -1;
  const block = {
    value: temp,
    row,
    col,
  };

  blockArr.push(block);
  dfs(board, row - 1, col, blockArr);
  dfs(board, row + 1, col, blockArr);
  dfs(board, row, col - 1, blockArr);
  dfs(board, row, col + 1, blockArr);

  return blockArr;
};

console.log(findPerfectSquares(board));

// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
//
// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.
//
//
//
// Example 1:
//
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers for each row is:
// row 0 -> 2
// row 1 -> 4
// row 2 -> 1
// row 3 -> 2
// row 4 -> 5
// Rows ordered from the weakest to the strongest are [2,0,3,1,4]
// Example 2:
//
// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers for each row is:
// row 0 -> 1
// row 1 -> 4
// row 2 -> 1
// row 3 -> 1
// Rows ordered from the weakest to the strongest are [0,2,3,1]
//
//
// Constraints:
//
// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let solution = mat
    // build an array [index, number of soliders]
    .map((row, i) => [i, row.reduce((acc, el) => acc + el, 0)])
    // sort array by either the index if number of soliders are equal or by number of soldiers of soldiers do not equal
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    // only take the first element which is the indexes
    .map((el) => el[0])
    // only return back k indexes
    .slice(0, k);

  return solution;
};

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let soldiers = [];
  for (let row = 0; row < mat.length; row++) {
    let count = 0;
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 1) {
        count++;
      }
      if (col === mat[0].length - 1) {
        soldiers.push([row, count]);
        count = 0;
      }
    }
  }

  soldiers.sort((a, b) => a[1] - b[1]);

  let output = [];

  for (let i = 0; i < k; i++) {
    output.push(soldiers[i][0]);
  }

  return output;
};

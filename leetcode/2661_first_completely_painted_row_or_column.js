/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const positionMap = new Map();
  const rowCount = new Array(rows).fill(cols);
  const colCount = new Array(cols).fill(rows);

  // set our position map so that we can reference it when we loop through the array
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      positionMap.set(mat[row][col], [row, col]);
    }
  }

  // loop through our array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    // obtain our row and col coordinate from the position map for the current number
    const [row, col] = positionMap.get(num);
    // decrement the row and col count for the current row and col since we visited it
    rowCount[row]--;
    colCount[col]--;

    // once either the current row or col is 0 then we know we have filled it
    if (rowCount[row] == 0 || colCount[col] == 0) {
      return i;
    }
  }

  return -1;
};

// Time: O(N) where N is the number of elements in the array
// Space: O(N) where N is the number of elements in the array since we store the position of each element in a map
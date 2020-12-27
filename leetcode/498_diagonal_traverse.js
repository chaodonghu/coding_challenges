// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
//
//
//
// Example:
//
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
//
// Output:  [1,2,4,7,5,3,6,8,9]
//
// Explanation:
//
//
//
// Note:
//
// The total number of elements of the given matrix will not exceed 10,000.
let findDiagonalOrder = function (matrix) {
  let map = {};

  if (!matrix.length) return [];

  let r = matrix.length;
  let c = matrix[0].length;

  // go through matrix and add the line number as a key and the values of that line as an array of values
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let key = i + j;

      if (!(key in map)) {
        map[key] = [];
      }

      map[key].push(matrix[i][j]);
    }
  }

  let len = Object.keys(map).length;
  let res = [];
  let flag = true;

  for (let i = 0; i < len; i++) {
    if (flag) {
      // reverse the array
      let data = map[i].reverse();
      // spread the data into the result
      res.push(...data);
      flag = false;
    } else {
      res.push(...map[i]);
      flag = true;
    }
  }

  return res;
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  let count = {};

  // store the frequencies of each element in the matrix into a map
  for (let row of mat) {
    for (let el of row) {
      count[el] = (count[el] || 0) + 1;
      // if we have an element that has a frequency equal to the matrix length that means the element is common across all rows
      if (count[el] === mat.length) {
        return el;
      }
    }
  }

  return -1;
};

/**
 * @param {number[][]} mat
 * @return {number}
 */

// O(n*mlogn)
var smallestCommonElement = function (mat) {
  // pop the last row in our matrix to utilize as the search row
  let searchRow = mat.pop();

  // loop through every element in our search row
  for (let el of searchRow) {
    // loop through every row in our matrix
    for (let row = 0; row < mat.length; row++) {
      // do a binary search on the row to see if the element exists, whenever we don't find the element in the subsequent rows, move onto the next element
      if (binarySearch(mat[row], el) === -1) break;
      // once we are on our last row and we haven't exited our early then we know we have found the common element in our rows
      if (row + 1 === mat.length) {
        return el;
      }
    }
  }
  return -1;
};

var binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// Time: O(N Mlog N) we iterate through N elements of the first row, for each element we do a binary search M times over the N elements 
// Space; O(1)

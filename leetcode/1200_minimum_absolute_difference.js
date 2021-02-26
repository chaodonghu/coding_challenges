// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
//
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
//
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
//
//
// Example 1:
//
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:
//
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:
//
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
//
//
// Constraints:
//
// 2 <= arr.length <= 10^5
// -10^6 <= arr[i] <= 10^6
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  // sort the array in ascending order
  arr.sort((a, b) => a - b);

  // instantiate our max to be the highest number
  let maxDifference = Number.MAX_SAFE_INTEGER;
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // difference between the two numbers
    let difference = Math.abs(arr[i + 1] - arr[i]);

    // if our difference is less than our max difference then update the max difference and replace our result array
    if (difference < maxDifference) {
      result = [[arr[i], arr[i + 1]]];
      maxDifference = difference;
    } else if (difference === maxDifference) {
      // if the difference equals our max difference then push into the result array
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
};

// Time: O(N)
// Space: O(N)

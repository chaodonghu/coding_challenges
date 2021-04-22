// Given a triangle array, return the minimum path sum from top to bottom.
//
// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
//
//
//
// Example 1:
//
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:
//
// Input: triangle = [[-10]]
// Output: -10
//
//
// Constraints:
//
// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
//
//
// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // instantiate a dp with each index representing the minimum sum at that level
  let dp = new Array(triangle.length + 1).fill(0);

  // loop through our triangle from the bottom row up
  for (let row = triangle.length - 1; row >= 0; row--) {
    // loop all the elements in the row
    for (let i = 0; i < triangle[row].length; i++) {
      let value = triangle[row][i];
      dp[i] = value + Math.min(dp[i], dp[i + 1]);
    }
  }

  // the first element would be the minimum path to the first level
  return dp[0];
};

// Time: O(N * M) where N is the number of rows in the triangle and M is the number of elements on the last row of the triangle
// Time: O(N) where N is the number of rows in the triangle

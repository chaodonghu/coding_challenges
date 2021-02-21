// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
//
//
//
// Example 1:
//
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
//
//
// Constraints:
//
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // sort the intervals
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];
    let previous = result[result.length - 1];
    // if the current start is greater than the previous end then push the element in
    if (i == 0 || currentStart > previous[1]) {
      result.push(intervals[i]);
    } else {
      // replace the previous end with the maximum of either the current end or the previous end
      previous[1] = Math.max(currentEnd, previous[1]);
    }
  }

  return result;
};

// Time Complexity: O(N log N)
// Space Complexity: O(N)

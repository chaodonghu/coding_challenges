// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
//
//
//
// Example 1:
//
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
// Example 2:
//
// Input: [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
// Example 3:
//
// Input: [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
//
//
// Note:
//
// You may assume the interval's end point is always bigger than its start point.
// Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let removals = 0;

  if (intervals.length < 1) return removals;

  // sort the intervals by their starting coordinateslack
  intervals.sort((a, b) => a[0] - b[0]);

  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    // get this start and end
    let thisStart = intervals[i][0];
    let thisEnd = intervals[i][1];

    // if this start is less than the previous end
    // (1) increment counter
    // (2) set the previous end to the min of prevEnd and thisEnd, remove the greater coordinate
    if (thisStart < prevEnd) {
      removals++;
      prevEnd = Math.min(prevEnd, thisEnd);
    } else {
      // set the previous end to this end, move forward
      prevEnd = thisEnd;
    }
  }

  return removals;
};

// Time: O(NlogN) since we spend O(logN) time for the sorting of the intervals then O(N) time going through each element pair in the array of intervals
// Space: O(1), since the sorting is done in place and the constants that we initiate to store the currentStart, currentEnd and previousEnd are O(1)

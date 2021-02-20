// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
//
//
//
// Example 1:
//
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:
//
// Input: intervals = [[7,10],[2,4]]
// Output: true
//
//
// Constraints:
//
// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti < endi <= 106

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  if (!intervals.length || intervals.length === 1) return true;

  // sort the intervals
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    // if the current element's end is greater than the next elements start then there is an overlap
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }

  return true;
};

// Time: O(N log N) -> we need to sort then go through the array
// Space: O(1)

// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
//
//
//
// Example 1:
//
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:
//
// Input: intervals = [[7,10],[2,4]]
// Output: 1
//
//
// Constraints:
//
// 1 <= intervals.length <= 104
// 0 <= starti < endi <= 106

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let n = intervals.length;
  let starts = [];
  let ends = [];

  // push our starting and end times into two seperate arrays
  for (let i = 0; i < n; i++) {
    let interval = intervals[i];

    starts.push(interval[0]);
    ends.push(interval[1]);
  }

  // sort all the starting and ending times
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let startPointer = 0;
  let endPointer = 0;
  let maxNumberMeetingRooms = 0;
  let usedRooms = 0;

  // while our pointer 1 is not greater than our interval length
  while (startPointer < n) {
    // if our start time is less than our end time
    if (starts[startPointer] < ends[endPointer]) {
      // increase the number of meeting rooms
      usedRooms++;
      // start the next meeting
      startPointer++;
    } else {
      // our current start time is greater then the end time meaning a meeting can be ended and the meeting room should be vacated
      usedRooms--;
      // increase the second pointer
      endPointer++;
    }

    maxNumberMeetingRooms = Math.max(usedRooms, maxNumberMeetingRooms);
  }

  return maxNumberMeetingRooms;
};

// Time Complexity: O (N log N)
// Space Complexity: O(N)

// There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.
//
// An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.
//
// Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.
//
//
//
// Example 1:
//
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).
// Example 2:
//
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Example 3:
//
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Example 4:
//
// Input: points = [[1,2]]
// Output: 1
// Example 5:
//
// Input: points = [[2,3],[2,3]]
// Output: 1
//
//
// Constraints:
//
// 0 <= points.length <= 104
// points.length == 2
// -231 <= xstart < xend <= 231 - 1

/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * @param {number[][]} points
 * @return {number}
 */

// if we sort balloons by end coordinate then all other balloons have two possibilities
// they either have a start coordinate less than the first end coordinate, or a start coordinate that is greater than the first end coordinate

// We solve this problem utilizing a greedy method, where we pick a locally optimal move at each step
var findMinArrowShots = function (points) {
  if (!points) return 0;

  // sort balloons by end coordinate
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let firstEnd = points[0][1];
  for (let [currStart, currEnd] of points) {
    // if the current ballons start coordinate is greater than the first end coordinate, then increase the # of arrows
    // and also update the first end
    if (currStart > firstEnd) {
      arrows += 1;
      firstEnd = currEnd;
    }
  }

  return arrows;
};

// Time: ONLogN
// Space: O(N) for sort

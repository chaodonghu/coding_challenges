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
var findMinArrowShots = function (points) {
  let removals = 0;

  if (points.length < 1) return removals;

  // sort the points by their starting coordinate
  points.sort((a, b) => a[0] - b[0]);

  let prevEnd = points[0][1];

  for (let i = 1; i < points.length; i++) {
    // get this start and end
    let thisStart = points[i][0];
    let thisEnd = points[i][1];

    // if this start is less than or equal to the previous end
    // (1) increment the removal counter
    // (2) set the previous end to the min of prevEnd and thisEnd, remove the greater coordinate
    if (thisStart <= prevEnd) {
      removals++;
      prevEnd = Math.min(prevEnd, thisEnd);
    } else {
      // set the previous end to this end, move forward
      prevEnd = thisEnd;
    }
  }

  return points.length - removals;
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0;

  // sort points by increasing order by endpoint
  points.sort((a, b) => a[1] - b[1]);

  let res = 1;
  // instantiate endpoint to be first endpoint
  let end = points[0][1];

  for (p of points) {
    // if the start of the current point is less than or equal then the end then it overlaps
    if (p[0] <= end) {
      continue;
    } else {
      // does not overlap then increase shots and move endpoint to latest end
      res++;
      end = p[1];
    }
  }

  return res;
};

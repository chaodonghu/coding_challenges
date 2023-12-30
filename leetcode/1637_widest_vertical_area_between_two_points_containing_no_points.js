/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  // sort points in ascending order
  points.sort((a, b) => a[0] - b[0]);

  let max = 0;

  for (let i = 1; i < points.length; i++) {
    max = Math.max(max, Math.abs(points[i][0] - points[i - 1][0]));
  }

  return max;
};


// Time: O(N log N) due to sorting the array of points
// Space: O(log N)
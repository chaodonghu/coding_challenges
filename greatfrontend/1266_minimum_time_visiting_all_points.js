/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let totalTime = 0;

  // Loop through the array and find the abs diferrence between the current point and the next point
  // We'll move diagonally until we lined up in a direction
  // Then we move horizontally or vertically the remaining distance
  for (i = 0; i < points.length - 1; i++) {
    let [currX, currY] = points[i];
    let [targetX, targetY] = points[i + 1];
    // To the total time we add either the max value of the difference between the x coordinates or the y coordinates since we can move diagonally.
    totalTime += Math.max(Math.abs(targetX - currX), Math.abs(targetY - currY));
  }

  return totalTime;
};

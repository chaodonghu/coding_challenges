/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

// Solution 1: Utilize more space to push an array of objects {distance: x, point: y} then sort and filter by distance and then k elements
// Push only the points from the sorted array of objects into another array and return that array
var kClosest = function (points, K) {
  // create distance array
  let distance = [];

  for (point of points) {
    distance.push({
      distance: Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)),
      point: point,
    });
  }

  let sortedArray = distance
    .sort((a, b) => (a.distance > b.distance ? 1 : -1))
    .filter((closest, idx) => idx < K);

  let finalResult = [];
  for (sorted of sortedArray) {
    finalResult.push(sorted.point);
  }

  return finalResult;
};

// Solution 2: Utilize less space
var kClosest = function (points, K) {
  // sort the points by their distance from the origin, forget about the distance key
  points.sort((a, b) => {
    return (
      Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) -
      Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2))
    );
  });

  return points.filter((closest, idx) => idx < K);
};

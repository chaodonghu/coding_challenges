/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  let arrivalTime = [];
  let monstersEliminated = 0;

  // the arrival time will be the distance of the monster/speed of the monster
  for (let i = 0; i < dist.length; i++) {
    arrivalTime.push(dist[i] / speed[i]);
  }

  // sort the arrival time in ascending order to determine which monsters to eliminate first
  arrivalTime.sort((a, b) => a - b);

  for (let i = 0; i < arrivalTime.length; i++) {
    // if the arrival time of the monster is less or equal to the index then we stop since the ability to reload our gun will not occur
    // each index represents the minute in time
    if (arrivalTime[i] <= i) {
      break;
    } else {
      monstersEliminated++;
    }
  }

  return monstersEliminated;
};

// Time: O(N * Log N)
// Space: O(N)

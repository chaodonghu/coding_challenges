/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  let m = maze.length;
  let n = maze[0].length;

  // set the min distance to the highest possible number as we will compare
  let minDistance = Number.MAX_SAFE_INTEGER;
  let visited = new Map();
  let [startX, startY] = start;

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let queue = [[startX, startY, 0]];
  let [destX, destY] = destination;

  while (queue.length > 0) {
    let [x, y, distance] = queue.shift();
    let key = `${x}#${y}`;

    // if we reached our target then update the min distance
    if (x === destX && y === destY) {
      minDistance = Math.min(minDistance, distance);
    }

    // if we have already visited a coordinate in the maze and the current distance is greater than the recorded distance, continue
    if (visited.has(key) && distance >= visited.get(key)) continue;
    // mark the coordinate as visited
    visited.set(key, distance);

    for (let [dx, dy] of dirs) {
      let i = x;
      let j = y;

      let curDistance = 0;
      // while we are in bounds go in the current direction until we reach a bounds while increasing the current distance by one step
      while (i >= 0 && i < m && j >= 0 && j < n && maze[i][j] === 0) {
        i += dx;
        j += dy;
        curDistance++;
      }

      // step one back once we reached a wall
      i -= dx;
      j -= dy;
      curDistance--;

      let cell = `${i}#${j}`;
      // if we have visited the cell and the distance plus the current distance from the starting point is greater than what was already recorded to this cell then contiune
      if (visited.has(cell) && distance + curDistance >= visited.get(cell)) {
        continue;
      }

      // if the distance plus the current distance to this cell is less than what was recorded, then set the new key value pair
      if (distance + curDistance < visited.get(key)) {
        visited.set(key, distance + curDistance);
      }

      // push into our queue the new starting point
      queue.push([i, j, distance + curDistance]);
    }
  }

  return minDistance === Number.MAX_SAFE_INTEGER ? -1 : minDistance;
};

// Time: O(M * N * Math.max(m, n))
// Space: O(M*N)

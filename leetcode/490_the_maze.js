// There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1). The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
//
// Given the m x n maze, the ball's start position and the destination, where start = [startrow, startcol] and destination = [destinationrow, destinationcol], return true if the ball can stop at the destination, otherwise return false.
//
// You may assume that the borders of the maze are all walls (see examples).
//
//
//
// Example 1:
//
//
// Input: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]
// Output: true
// Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.
// Example 2:
//
//
// Input: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]
// Output: false
// Explanation: There is no way for the ball to stop at the destination. Notice that you can pass through the destination but you cannot stop there.
// Example 3:
//
// Input: maze = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], start = [4,3], destination = [0,1]
// Output: false

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  let m = maze.length;
  let n = maze[0].length;

  let queue = [start];

  const dirs = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // down
    [0, 1], //up
  ];

  while (queue.length > 0) {
    // dequeue the first element in our queue (starting coordinate)
    let [x, y] = queue.shift();
    let [destinationX, destinationY] = destination;

    if (x === destinationX && y === destinationY) {
      return true;
    }

    for (let [dx, dy] of dirs) {
      let i = x;
      let j = y;

      // while the we are stil in bounds on the maze, add the direction to the current coordinate
      // until we are out of bounds or hit a wall
      while (i >= 0 && i < m && j >= 0 && j < n && maze[i][j] !== 1) {
        i += dx;
        j += dy;
      }

      // once we hit a wall, take one step back and remove the current dx and dy
      i -= dx;
      j -= dy;

      // if we have already visited the coordinate then continue with the next direction
      if (maze[i][j] !== 0) continue;

      // mark the current coordinate as visited
      maze[i][j] = 2;

      // push into our queue the new starting coordinate
      queue.push([i, j]);
    }
  }

  // if we have gone through our entire queue, we have ended up at a coordinate that is not the desired destination
  return false;
};

// Time: O(N * M)
// Space: O(N * M)

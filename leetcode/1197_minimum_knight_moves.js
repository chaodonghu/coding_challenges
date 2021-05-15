// In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].
//
// A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.
//
//
//
// Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.
//
//
//
// Example 1:
//
// Input: x = 2, y = 1
// Output: 1
// Explanation: [0, 0] → [2, 1]
// Example 2:
//
// Input: x = 5, y = 5
// Output: 4
// Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
//
//
// Constraints:
//
// |x| + |y| <= 300


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  let dirs = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  // our level of the BST is the # of steps it takes to reach the desired coordinate
  let level = 0;
  // we start at the coordinate 0, 0
  let queue = [[0, 0]];
  // instantiate set to record where we have already been
  let set = new Set();

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let [xCor, yCor] = queue.shift();

      // if our xCoordinate and our Ycoordinate are on the desired coodinate, return the level/step we are on
      if (xCor === x && yCor === y) return level;

      // go through all of our directions
      for (let [xDir, yDir] of dirs) {
        let nextX = xDir + xCor;
        let nextY = yDir + yCor;
        let destination = `${nextX}, ${nextY}`;

        // if we haven't visted that coordinate then push it to our set and add it to the queue
        if (!set.has(destination)) {
          queue.push([nextX, nextY]);
          set.add(destination);
        }
      }
    }

    // once we have gone through our current queue then increase the level
    level++;
  }
};

const hasPath = (maze, start, destination) => {
  const m = maze.length;
  const n = maze[0].length;
  const queue = [start];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const [destinationX, destinationY] = destination;

    if (x === destinationX && y === destinationY) {
      return true;
    }

    for (let [dx, dy] of dirs) {
      let i = x;
      let j = y;

      // Keep rolling in the current direction
      while (i >= 0 && i < m && j >= 0 && j < n && maze[i][j] !== 1) {
        i += dx;
        j += dy;
      }

      // One step back
      i -= dx;
      j -= dy;

      // Check if it's visited
      if (maze[i][j] !== 0) continue;

      // Mark as visited
      maze[i][j] = 2;

      // Continue rolling(or search) from [i, j]
      queue.push([i, j]);
    }
  }

  return false;
};

// Time: O(N * M)
// Space: O(N * M)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  var edges = 0;
  // loop through the rows
  grid.forEach((row, r) => {
    // loop through the columns
    row.forEach((currentCell, c) => {
      // Determine if the cells to the left, right, top and bottom of the current cell is land or water, if it is land, it is 1 if it it water it is 0
      var left = grid[r][c - 1] || 0;
      var right = grid[r][c + 1] || 0;
      var top = (grid[r - 1] || [])[c] || 0;
      var bottom = (grid[r - 1] || [])[c] || 0;

      // if the current cell is 1 then add the edges of that coordinate (subtract 4 from the total of the top, bottom, left, right)
      if (currentCell === 1) {
        edges += 4 - (top + bottom + left + right);
      }
    });
  });
  return edges;
};

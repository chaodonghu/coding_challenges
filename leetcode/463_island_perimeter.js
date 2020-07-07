/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  var edges = 0;
  // loop through the rows
  grid.forEach((row, r) => {
    // loop through the columns
    row.forEach((col, c) => {
      // get the value (1) of the left, right, top and bottom of the coordinate or it is 0
      var left = grid[r][c - 1] || 0;
      var right = grid[r][c + 1] || 0;
      var top = (grid[r - 1] || [])[c] || 0;
      var bottom = (grid[r - 1] || [])[c] || 0;

      // if the column is 1 then add the edges of that coordinate (subtract 4 from the total of the top, bottom, left, right)
      if (col === 1) {
        edges += 4 - (top + bottom + left + right);
      }
    });
  });
  return edges;
};

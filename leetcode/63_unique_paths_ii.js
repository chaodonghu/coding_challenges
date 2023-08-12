// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // if there is an obstacle on the first coordinate then just return 0 paths since it will be impossible to get to the end;
    if (obstacleGrid[0][0]) return 0;

    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;

    // each value in the dp represents the # of paths we can take to get to that coordinate
    let dp = new Array(rows).fill(0).map((row) => new Array(cols).fill(0));

    dp[0][0] = 1;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (obstacleGrid[row][col] || (!row && !col)) continue; // if there is an obstacle on the coordinate or we are at the beginning just continue
            else {
                // each cell can either be reached by two previously visited cells (either up or left)
                console.log('row', row);
                console.log('col', col);
                // if we have a row, that means we could move down (from up)
                // if we have col, that means we could move right (from left)
                dp[row][col] = (row ? dp[row - 1][col] : 0) + (col ? dp[row][col - 1] : 0)
            }

            console.log('dp', dp)
        }

    }

    return dp[rows - 1][cols - 1];
};

// Time: O(N * M)
// Space: O(N * M)
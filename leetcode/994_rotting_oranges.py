# You are given an m x n grid where each cell can have one of three values:
#
# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
#
# Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
#
#
#
# Example 1:
#
#
# Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
# Output: 4
# Example 2:
#
# Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
# Output: -1
# Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
# Example 3:
#
# Input: grid = [[0,2]]
# Output: 0
# Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
#
#
# Constraints:
#
# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 10
# grid[i][j] is 0, 1, or 2.

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        VISITED = -1
        EMPTY = 0
        FRESH = 1
        ROTTEN = 2

        h, w = len(grid), len(grid[0])

        fresh_count = 0

        rotten_grid = []

        for y in range(h):
            for x in range(w):
                if grid[y][x] == FRESH:
                    fresh_count += 1
                elif grid[y][x] == ROTTEN:
                    rotten_grid.append((x, y, 0))

        # instantiate queue for bfs
        traversal_queue = deque(rotten_grid)

        time_record = 0

        while traversal_queue:

            x, y, time_stamp = traversal_queue.popleft()

            for dx, dy in ( (-1, 0), (+1, 0), (0, -1), (0, +1) ):

                next_x, next_y = x + dx, y + dy

                if 0 <= next_x < w and 0 <= next_y < h and grid[next_y][next_x] == FRESH:

                    fresh_count -= 1
                    grid[next_y][next_x] = VISITED

                    # update time record
                    time_record = time_stamp + 1

                    # adding current rotten orange to traversal queue
                    traversal_queue.append( (next_x, next_y, time_stamp + 1) )


        if fresh_count == 0:
            return time_record
        else:
            return -1

# Time: O(M * N)
# Space: O(M * N)

class Solution:
    def firstCompleteIndex(self, arr: List[int], mat: List[List[int]]) -> int:
        position_map = {}
        rows = len(mat)
        cols = len(mat[0])
        row_count = [cols] * cols
        col_count = [rows] * rows

        # store each num in arr in the position map where it appears in the matrix
        for row in range(rows):
            for col in range(cols):
                position_map[mat[row][col]] = (row, col)

        # loop through the array
        for i in range(len(arr)):
            num = arr[i]
            # get the row and col of the current num in the position map
            row, col = position_map[num]

            # decrement the row count
            row_count[row] -= 1
            # decrement the col count
            col_count[col] -= 1

            # Once either the current row or column count reaches 0, we know it's complete
            if row_count[row] == 0 or col_count[col] == 0:
                return i

        return -1

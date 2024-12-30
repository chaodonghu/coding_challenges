class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
        res = 0
        # our current max is the first value minus 1 (which is the distance between the next element)
        curr_max = values[0] - 1
        # start at the second element
        for i in range(1, len(values)):
            # update our result which is the cur_max plus our current value
            res = max(res, values[i] + curr_max)
            # our current max will be our current max subtracted by 1 (the distance will always increase by one if we stay with our original current max)
            # or it will be the current value - 1
            curr_max = max(curr_max - 1, values[i] - 1)

        return res


# Time: O(N) where N is the length of values
# Space: O(1) we are only using a constant amount of space

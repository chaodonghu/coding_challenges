# Count left zeros and right ones
class Solution:
    def maxScore(self, s: str) -> int:
        ones = s.count("1")
        zeros = 0
        best = 0

        # iterate through the string from start to finish
        for i in range(len(s) - 1):
            # decrement 1's
            if s[i] == "1":
                ones -= 1
            # increment zeros
            else:
                zeros += 1

            best = max(best, zeros + ones)

        return best
# Time: O(N)
# Space: O(1)
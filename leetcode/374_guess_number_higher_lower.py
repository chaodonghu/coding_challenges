# We are playing the Guess Game. The game is as follows:
#
# I pick a number from 1 to n. You have to guess which number I picked.
#
# Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
#
# You call a pre-defined API int guess(int num), which returns 3 possible results:
#
# -1: The number I picked is lower than your guess (i.e. pick < num).
# 1: The number I picked is higher than your guess (i.e. pick > num).
# 0: The number I picked is equal to your guess (i.e. pick == num).
# Return the number that I picked.
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        low = 1
        high = n

        # implement binary search
        while (low <= high):
            mid = math.floor(low + (high - low) / 2)
            res = guess(mid)

            if (res == 0):
                return mid
            # number is lower than the guess therefore move our high to the guess(mid) - 1
            elif (res < 0):
                high = mid - 1
            # number is higher than the guess therefore move our low to the guess(mid) + 1
            else:
                low = mid + 1

        return -1
# Time: O(log N)
# Space: O(1)

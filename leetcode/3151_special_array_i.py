class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        for i in range(1, len(nums)):
            prev = nums[i - 1]
            curr = nums[i]

            if (prev % 2 == 0 and curr % 2 == 0) or (prev % 2 != 0 and curr % 2 != 0):
                return False

        return True

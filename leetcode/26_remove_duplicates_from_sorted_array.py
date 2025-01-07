class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # first pointer
        i = 0

        # iterate through the list with a second poinetr
        for j in range(1, len(nums)):
            # if the current number is the same as the next number, replace the number at our first pointer with the current number
            if nums[j] != nums[i]:
                nums[i] = nums[j]
                i += 1

        return i

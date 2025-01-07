class NumArray:

    def __init__(self, nums: List[int]):
        # instantiate a prefix_sum array to store the sum of all elements from 0 to i
        # the array is one element longer than the input array to account for the 0th index
        self.prefix_sum = [0] * (len(nums) + 1)
        # go through the sums, each time adding the current number to the previous sum
        # each index represents the sum of all elements from 0 to i
        for i, num in enumerate(nums):
            self.prefix_sum[i + 1] = self.prefix_sum[i] + num

    def sumRange(self, left: int, right: int) -> int:
        # return the difference between the right and left index -> this will be the sum of all elements from left to right
        return self.prefix_sum[right + 1] - self.prefix_sum[left]
    
# Time complexity: O(n) for the constructor, O(1) for the sumRange, since the lookup in the prefix_sum array is O(1)
# Space complexity: O(n) for the prefix_sum array


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)


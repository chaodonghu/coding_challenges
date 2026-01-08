class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # instantiate our count
        count = {}
        # start our k pointer
        k = 0

        # go through the array
        for num in nums:
            # increment out count hashmap
            count[num] = count.get(num, 0) + 1
            # if the count is less than or equal to 2 then update our array in place and increment k
            if count[num] <= 2:
                nums[k] = num
                k += 1

        return k

# time complexity: O(n)
# space complexity: O(n)
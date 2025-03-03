class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        low = []
        mid = []
        high = []

        for num in nums:
            if num < pivot:
                low.append(num)
            elif num == pivot:
                mid.append(num)
            else:
                high.append(num)

        return low + mid + high

# Time complexity: O(n)
# Space complexity: O(n) since we are using three lists to store the elements
class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0

        total_water = 0
        left = 0
        right = len(height) - 1
        left_max = height[left]
        right_max = height[right]

        while left < right:
            # if our height at the left pointer is less than or equal the height at the right pointer
            if height[left] <= height[right]:
                # water can be trapped
                if height[left] < left_max:
                    total_water += left_max - height[left]
                else:
                    # update our left_max
                    left_max = height[left]
                # move left pointer to the right
                left += 1
            # if our height at the right pointer is less than the height at the left pointer
            else:
                # water can be trapped if the current right pointer is less than the right max
                if height[right] < right_max:
                    # add the difference between the right max and the current height, the SA is one unit
                    total_water += right_max - height[right]
                else:
                    # update our right_max
                    right_max = height[right]
                # move right pointer left
                right -= 1

        return total_water

# Time: O(N + N) => O(N) since we utilize two pointers to iterate through the array of heights
# Space: O(1) since we are not using any extra space
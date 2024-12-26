class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count_map = defaultdict(
            int
        )  # Dictionary to store counts, defaults value if key does not exist
        max_count = 0
        max_num = 0

        for num in nums:
            count_map[
                num
            ] += 1  # Increment count for the number, if it does not exist defaultdict handles

            # If the current number's count is greater than the max_count
            if count_map[num] > max_count:
                max_count = count_map[num]
                max_num = num

        return max_num


# Time: O(N) since we iterate through the entire list of nums
# Space: O(1) since we use a dictionary to store the key value mapping of num to counts

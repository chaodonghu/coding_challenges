class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # grab the shortest and longest strs
        min_str = min(strs)
        max_str = max(strs)

        # go through the shortest string
        for i, letter in enumerate(min_str):
            # if the letter does not equal the max_str's index then return a slice of the min_str at the current index
            if letter != max_str[i]:
                return min_str[:i]

        # all the strings are equal, either return min_str or max_str
        return min_str

# Time: O(N) where N is the number of characters in the longest string
# Space: O(1) since we are not using any extra space
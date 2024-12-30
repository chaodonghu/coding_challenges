class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # Grab the length of the needle string
        needleLength = len(needle)

        # loop through the haystack on character at a time
        for index, char in enumerate(haystack):
            # see if the substr of the haystack that spans from
            # current index to the length of the needle length equals the needle
            # if it does return the index
            # sliding window
            if needle == haystack[index : needleLength + index]:
                return index

        return -1


# Time: O(N)
# Space: O(1)

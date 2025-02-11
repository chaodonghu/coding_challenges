class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        # loop through the string until our part (substring) does not occur in the string
        while part in s:
            # replace the substring with an empty string
            s = s.replace(part, "", 1)
        # return the string
        return s

# Time: O(N*M) where N is the length of the string and M is the length of the substring
# Space: O(N) where N is the length of the string
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # strip the spaces
        # split the string into list of words
        # pop off the last word in the array
        return len(s.strip().split(" ").pop())

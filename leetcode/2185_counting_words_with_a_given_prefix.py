class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        count = 0
        for word in words:
            if word.startswith(pref):
                count += 1

        return count

# Time: O(N) - N is the number of words
# Space: O(1) - No extra space is used
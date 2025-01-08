class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        count = 0
        n = len(words)

        for i in range(n):
            for j in range(n):
                if i == j or i > j:
                    continue
                if words[j].startswith(words[i]) and words[j].endswith(words[i]):
                    count += 1

        return count

# Time; O(n^2) since we have a nested for loop with two pointers
# Space: O(1) since we are not using any extra space
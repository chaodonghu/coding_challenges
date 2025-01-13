class Solution:
    def minimumLength(self, s: str) -> int:
        charFrequencyMap = {}

        for char in s:
            charFrequencyMap[char] = charFrequencyMap.get(char, 0) + 1

        deleteCount = 0

        for char, charFreq in charFrequencyMap.items():
            print(charFreq)
            # if the character frequency is odd, add frequency -1 to delete count (thus we remove all the occurances of the character except for one)
            if charFreq % 2 != 0:
                deleteCount += charFreq - 1
            else:
                # even, delete all the character frequencies except 2
                deleteCount += charFreq - 2

        return len(s) - deleteCount

# Time complexity: O(N)
# Space complexity: O(1) since we store a map of the character frequencies which is at most 26 characters long
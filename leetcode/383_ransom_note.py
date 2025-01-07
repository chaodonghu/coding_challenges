class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magazineHash = {}

        for char in magazine:
            magazineHash[char] = magazineHash.get(char, 0) + 1

        for char in ransomNote:
            if char in magazineHash and magazineHash[char] > 0:
                magazineHash[char] = magazineHash.get(char) - 1
            else:
                return False

        return True

# Time: O(N) we iterate through the magazine and ransomNote strings
# Space: O(N) we store the characters in the magazine in a hash table
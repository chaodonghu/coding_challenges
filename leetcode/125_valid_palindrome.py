class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_str = re.sub(r"[^a-zA-Z0-9]", "", s.lower())
        start = 0
        end = len(clean_str) - 1

        while end > start:
            if clean_str[start] == clean_str[end]:
                start += 1
                end -= 1
                continue
            else:
                return False

        return True

# Time: O(N) since we iterate through the string once
# Space: O(1) since the string is cleaned in place
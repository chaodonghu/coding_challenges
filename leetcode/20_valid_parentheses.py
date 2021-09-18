class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        dict = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for char in s:
            # if bracket is an opening bracket
            if char in dict.values():
                stack.append(char)
            # else bracket is an closing bracket
            elif char in dict.keys():
                # if the stack is empty or the complementary opening bracket is not at the top of the stack return false
                if stack == [] or dict[char] != stack.pop():
                    return False
            else:
                return False
        # return if the stack is empty after iterating through the string
        return stack == []

# Time: O(N)
# Space: O(N)

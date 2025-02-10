class Solution:
    def clearDigits(self, s: str) -> str:
        answer = []

        for char in s:
            # if the current character is a digit and our answer/stack is not empty
            if char.isdigit() and answer:
                # delete the last character
                answer.pop()
            else:
                # if the character is not a digit, add it to our stack
                answer.append(char)

        return "".join(answer)

# Time complexity: O(n)
# Space complexity: O(n), since we have a stack that stores the characters
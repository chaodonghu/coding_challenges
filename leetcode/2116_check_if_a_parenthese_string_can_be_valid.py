class Solution:
    def canBeValid(self, s: str, locked: str) -> bool:
        # if the length of the string is not even then it is impossible that we can have a valid parentheses string since one bracket will not have a complimentary pair
        if len(s) % 2 != 0:
            return False

        open_possible = 0
        close_possible = 0

        # go left to right
        for i in range(len(s)):
            # count all of the open possible occurances
            # that being if the string already contains an open bracket or if we're able to change it to an open bracket
            open_possible += 1 if locked[i] == "0" or s[i] == "(" else -1
            if open_possible < 0:
                return False

        # go right to left
        for i in range(len(s) - 1, -1, -1):
            # add to our close_possible count, if it already contains a closed bracket or if we're able to change it to an closed bracket
            close_possible += 1 if locked[i] == "0" or s[i] == ")" else -1
            # if we dont have any closed possibles then we return false
            if close_possible < 0:
                return False

        return True


# Time: O(N) since we do two passes throught he string O(2N)
# Space: O(1)

class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        # if our k is greater than the length of the string then its impossible to form k palidromic substrings since each letter in the s can technically be a palindrome and the characters in s won't make up k values
        if k > len(s):
            return False

        # generate a hashmap/dict of all the characters and their counts in the string
        count = Counter(s)
        # store the number of odd counts
        odd = 0
        # go through the count hashmap
        for count in count.values():
            # if the count is odd then increase the number of odd values/counts in the string
            odd += count % 2

        # if the number of odd counts in the string is less than or equal to k then it's possible
        return odd <= k

    # Time: O(N)
    # Space: O(26) - lowercase a through z

    # eg.
    # leetcode, k = 3
    # count {
    # l: 1
    # e: 3
    # t: 1
    # d: 1
    # o: 1
    # }
    # odd would be 5 -> therefore we need atleast k = 5 palindromes to utilize all the characters in the string
    # False

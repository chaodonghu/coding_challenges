class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        # creates a object/set of vowels
        vowel_set = set("aeiou")

        # create an array of 0's the length of the words array
        prefix_count = [0] * (len(words) + 1)

        prev = 0

        # go through the words array
        for i, word in enumerate(words):
            # if the word starts and ends in a vowel
            if word[0] in vowel_set and word[-1] in vowel_set:
                prev += 1
            # i + 1 since our first index is 0
            prefix_count[i + 1] = prev

        # now store our answer
        res = [0] * len(queries)
        # go through our queries array
        for i, query in enumerate(queries):
            # unpack the query
            left, right = query
            res[i] = prefix_count[right + 1] - prefix_count[left]

        return res

# Time: O(N + Q)
# Space: O(N)
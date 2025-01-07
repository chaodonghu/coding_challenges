class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        n = len(words)
        ans = []

        # instantiate two pointers
        for i in range(n):
            for j in range(n):
                # if we find a substring then we will output something > 0
                if i != j and words[j].find(words[i]) != -1:
                    # if there is a substring then add it to the answer
                    ans.append(words[i])
                    break

        return ans

# Time: O(N^2 * M) where N is the number of words and M is the length of the longest word
# Space: O(N) where N is the number of words, since all the words could technically be a substring of another word
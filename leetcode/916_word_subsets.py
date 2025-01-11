class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
        # make a default dict that stores the count of words 2
        global_count = defaultdict(int)

        # go through the words2 and update the global_count dict
        for word in words2:
            # this produces a hashmap of each of word
            count_w = Counter(word)
            # go through every count pair in the hashmap/dict of each word
            for char, count in count_w.items():
                # update our global hashmap to be the max
                global_count[char] = max(global_count[char], count)

        res = []

        for word in words1:
            # get the count of the word
            count_w = Counter(word)
            # the count is good, we assume that the global count hashmap contains all the words/characters in the current word
            flag = True
            # go through the global count hashmap which contains the maximum mapping for each character in words2
            for char, count in global_count.items():
                # if the current word has more characters than the ones in the global hashmap continue
                if count_w[char] >= count:
                    continue
                else:
                    # if it doesn't, then set our flag to false
                    flag = False
            if flag:
                res.append(word)

        return res

# Time: O(N + M) where N is the length of words1 and M is the length of words2
# Space: O(1) since we are using a hashmap to store the count of words2
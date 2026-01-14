class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split(" ")
        if len(words) != len(pattern):
            return False

        seen = {}

        # ('a', 'dog')
        # ('b', 'cat')
        # ('b', 'cat')
        # ('a', 'dog')
        for p, w in zip(pattern, words):
            # set unique keys, pattern maps to the word
            key_p = ("p", p)
            # word maps to the pattern
            key_w = ("w", w)

            if key_p in seen and seen[key_p] != w:
                return False
            if key_w in seen and seen[key_w] != p:
                return False

            seen[key_p] = w
            seen[key_w] = p

        return True

# Time: O(N)
# Space: O(1)
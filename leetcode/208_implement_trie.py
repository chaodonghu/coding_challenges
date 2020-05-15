# Implement a trie with insert, search, and startsWith methods.
#
# Example:
#
# Trie trie = new Trie();
#
# trie.insert("apple");
# trie.search("apple");   // returns true
# trie.search("app");     // returns false
# trie.startsWith("app"); // returns true
# trie.insert("app");
# trie.search("app");     // returns true
# Note:
#
# You may assume that all inputs are consist of lowercase letters a-z.
# All inputs are guaranteed to be non-empty strings.
class Node:
    def __init__(self):
        self.children = {}
        self.endofword = False

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = Node()


    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        pointer = self.root

        for letter in word:
            # if the letter is still not in the structure, add a new node
            if letter not in pointer.children:
                pointer.children[letter] = Node()
            # then set the pointer to the new node
            pointer = pointer.children[letter]
        # after we get through all the letters, set the end of the word
        pointer.endofword = True


    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        pointer = self.root

        for letter in word:
            # if the letter is not in the structure, return false
            if letter not in pointer.children:
                return False
            # then set the pointer to the new node
            pointer = pointer.children[letter]

        # check endofword?
        if pointer.endofword:
            return True
        else:
            return False


    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        pointer = self.root

        for letter in prefix:
            # if the letter is not in the structure, return false
            if letter not in pointer.children:
                return False
            # then set the pointer to the new node
            pointer = pointer.children[letter]

        return True



# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

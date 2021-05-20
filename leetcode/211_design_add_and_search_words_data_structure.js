/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }
  node.word = word;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  var search = function (node, levelIndex) {
    // Cannot search for the word as the node is null or we have reached the levelIndex of the word length but it doesn't equal to word
    if (!node || (levelIndex === word.length && !node.word)) {
      return false;
    }

    // if we reached the leaf/end of the trie branch and the levelIndex equals the word length
    if (levelIndex === word.length && node.word) {
      return true;
    }

    // if the character is a dot
    if (word[levelIndex] === ".") {

      // go through the alphabet searching if the letter is a path in the trie
      for (let i = 0; i < 26; i++) {
        var ch = String.fromCharCode(97 + i);

        // recursively call it on the character and add 1 to levelIndex
        if (search(node[ch], levelIndex + 1)) {
          return true;
        }
      }

      // if we go through all the alphabet and it we can't find it then return false
      return false;
    }

    // if the character isn't a dot then just increment the pointer levelIndex and search for the character
    return search(node[word[levelIndex]], levelIndex + 1);
  };

  // call dfs on our trie with the level being 0
  return search(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

 // Time: O(N * 26^M)
 // Space: O(1)

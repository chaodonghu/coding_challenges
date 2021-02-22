/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort();
  let set = new Set();
  let result = "";

  for (let word of words) {
    // if the word length is 1
    // if the set has the substring of the current word minus the last character
    if (word.length === 1 || set.has(word.substr(0, word.length - 1))) {
      // add the new set to the word
      set.add(word);
      // if our current word is longer then the result then replace our result word
      if (word.length > result.length) {
        result = word;
      }
    }
  }
  return result;
};

// Time Complexity: O(N log N) because of the sort and we iterate through the words
// Space Complexity: O(1)

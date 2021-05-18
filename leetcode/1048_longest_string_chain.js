// Given a list of words, each word consists of English lowercase letters.
//
// Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".
//
// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.
//
// Return the longest possible length of a word chain with words chosen from the given list of words.
//
//
//
// Example 1:
//
// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chain is "a","ba","bda","bdca".
// Example 2:
//
// Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5
//
//
// Constraints:
//
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of English lowercase letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  let map = new Map();

  words.sort((a, b) => a.length - b.length);

  let result = 0;

  for (let word of words) {
    // sort the number of predecesors the word currently has
    let curBest = 0;

    for (let i = 0; i < word.length; i++) {
      // delete the character of the current index we are on
      let prev = word.substring(0, i) + word.substring(i + 1);

      // our current best is either the count of all the predecesors or the current best
      curBest = Math.max(curBest, map.has(prev) ? map.get(prev) + 1 : 1);

      // update our current word to the number of predecesors that exist
      map.set(word, curBest);

    }
    // update our result to be the result or our current best
    result = Math.max(result, curBest)
  }

  return result;
};


// Time:
// O(N log N) to sort the words in increasing length
// O(L^2) to loop through each character of the word and split it by an index

// Space: O(N) since we need to create a map that stores all of our words

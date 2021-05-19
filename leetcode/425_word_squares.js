// Given an array of unique strings words, return all the word squares you can build from words. You can return the answer in any order.
//
// A sequence of strings forms a valid word square if the kth row and column read the same string, where 0 <= k < max(numRows, numColumns).
//
// For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.
//
//
// Example 1:
//
// Input: words = ["area","lead","wall","lady","ball"]
// Output: [["ball","area","lead","lady"],["wall","area","lead","lady"]]
// Explanation:
// The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
// Example 2:
//
// Input: words = ["abat","baba","atan","atal"]
// Output: [["baba","abat","baba","atal"],["baba","abat","baba","atan"]]
// Explanation:
// The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
//
//
// Constraints:
//
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 5
// All words[i] have the same length.
// words[i] consists of only lowercase English letters.
// All words[i] are unique.

/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
  let results = [];
  let hash = {};
  for (const word of words) {
    backtrack([word], 1);
  }

  function backtrack(curr, idx) {
    if (curr.length === curr[0].length) {
      results.push(curr);
      return;
    }
    let prefix = curr.map((word) => word[idx]).join("");
    console.log('prefix', prefix);
    console.log('getPrefixes(prefix)', getPrefixes(prefix));
    for (const word of getPrefixes(prefix)) {
      backtrack([...curr, word], idx + 1);
    }
  }

  function getPrefixes(target) {
    if (target in hash) return hash[target];
    hash[target] = [];
    for (const word of words) {
      if (word.startsWith(target)) hash[target].push(word);
    }
    return hash[target];
  }

  return results;
};

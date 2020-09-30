// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
//
// Note:
//
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:
//
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
//
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:
//
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // create a set with the words
  const words = new Set(wordDict);

  // create a set with the word lengths
  const wordLens = new Set(wordDict.map((word) => word.length));

  // create a new set of all the starting points
  const starts = new Set([0]);

  // loop through the starting points
  for (let start of starts) {
    // loop through the word lengths
    for (let len of wordLens) {
      // if the words has a slice of the target word then add it to the starts
      if (words.has(s.slice(start, start + len))) {
        starts.add(start + len);
      }
    }
  }

  // if the starts has the word length at the end
  return starts.has(s.length);
};

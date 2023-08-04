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

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let map = {};

  wordDict.forEach((word) => {
    map[word] = true;
  })

  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  // each coordinate in the dp represents the index of the original string and if that index is true then there is a segmentation of that string in the word dict
  dp[0] = true; // since this will be the start of the string


  // sliding window
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // j will go up to i
      // if (dp[j]) is true then we already found a segmentation of the string
      // if map[s.substring(j, i)] is true that means we found the substring in the string
      if (dp[j] && map[s.substring(j, i)]) {
        dp[i] = true;
        break;
      }
    }
  }

  // dp[n] means that the entire word can be segmented
  return dp[n];
};

// Time: O(N)
// Space: O(N)

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the shortest distance from s[i] to the character c in s.
//
//
//
// Example 1:
//
// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Example 2:
//
// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s[i] and c are lowercase English letters.
// c occurs at least once in s.

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let dp = new Array(s.length).fill(Number.MAX_SAFE_INTEGER);
  // if the first character in the dp equals the target character then mark this as 0
  dp[0] = s[0] === c ? 0 : Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === c) {
      dp[i] = 0;
    } else {
      dp[i] = dp[i - 1] === Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : dp[i-1] + 1;
    }
  }

  let distance = Number.MAX_SAFE_INTEGER;

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === c) {
      distance = 0;
    }

    dp[j] = Math.min(dp[j], distance);
    distance += 1;
  }

  return dp;
  // where the character exists in our dp array, mark it with a 0, leave all non matching characters as max safe integer
  // if we pass a character that is next to the character then add one to its distance

};

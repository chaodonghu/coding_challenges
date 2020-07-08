/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let map = {};

  wordDict.forEach((word) => {
    map[word] = true;
  });

  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && map[s.substring(j, i)]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

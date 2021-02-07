/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let dp = new Array(s.length).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = s[0] === c ? 0 : Number.MAX_SAFE_INTEGER;

  // where the character exists in our dp array, mark it with a 0, leave all non matching characters as max safe integer
  // if we pass a character that is next to the character then add one to its distance
  for (let i = 1; i < s.length; i++) {
    if (s[i] === c) {
      dp[i] = 0;
    } else {
      dp[i] =
        dp[i - 1] === Number.MAX_SAFE_INTEGER
          ? Number.MAX_SAFE_INTEGER
          : dp[i - 1] + 1;
    }
  }

  // we go backwards in the array
  let distance = Number.MAX_SAFE_INTEGER;

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      distance = 0;
    }

    dp[i] = Math.min(distance, dp[i]);
    distance += 1;
  }

  return dp;
};

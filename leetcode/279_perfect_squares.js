// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//
// Example 1:
//
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:
//
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n+1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i=1;i<=n;i++) {
        for (let j=1;j<=Math.floor(Math.sqrt(i));j++){
            dp[i] = Math.min(dp[i], dp[i-j*j]+1);
        }
    }
    return dp[n];
}

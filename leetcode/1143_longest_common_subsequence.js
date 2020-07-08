var longestCommonSubsequence = function(text1, text2) {
    const dp = [];
    let m = text1.length;
    let n = text2.length;

    // instantiate dp array with columns of length text1 and rows of length text2.
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    console.log('dp', dp);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // two  possible scenarioes:
            // 1. the current char of text1 and text2 does not match
			if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
                // check left and top for longer subsequence length
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            // 2. the current char of text1 and text2 matches
            else {
                // check diag for prev longest subsequence length and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }

    // return the last of our matrix, and that will be the max
    return dp[m][n];
};

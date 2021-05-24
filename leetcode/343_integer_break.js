// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.
//
// Return the maximum product you can get.
//
//
//
// Example 1:
//
// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:
//
// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
//
//
// Constraints:
//
// 2 <= n <= 58

/**
 * @param {number} n
 * @return {number}
 */
// Top down recursive
var integerBreak = function(n) {
  let memoize = {};

  if (n <= 2) return 1;

  if (memoize[n]) {
    return memoize[n];
  }

  let answer = 1 * (n - 1)

  for (let i = 2; i < n; i++) {
    let firstNum = i;
    let secondNum = n - i;
    let product = firstNum * Math.max(secondNum, integerBreak(secondNum));
    if (product > answer) {
      answer = product;
    }

    memoize[n] = answer;
  }
  return answer;
};

// Bottom up - Dynamic Programming

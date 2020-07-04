// Write a program to check whether a given number is an ugly number.
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
//
// Example 1:
//
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:
//
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:
//
// Input: 14
// Output: false
// Explanation: 14 is not ugly since it includes another prime factor 7.
// Note:
//
// 1 is typically treated as an ugly number.
// Input is within the 32-bit signed integer range: [−231,  231 − 1].

/**
 * @param {number} num
 * @return {boolean}
 */

/**
 * @param {number} num
 * @return {boolean}
 */

var isUgly = function (num) {
  // for every prime number
  // start with 2, then 3 then 5
  for (let p of [2, 3, 5]) {
    // while the number is not 0 and the modulo of the prime is equal to 0 (num is divisible by the factor)
    while (num && num % p == 0) {
      // divide the num by the prime factor
      num /= p;
    }
  }
  // check if the num is equal to 1
  return num == 1;
};

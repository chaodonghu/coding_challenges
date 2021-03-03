// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
//
//
// Example 1:
//
// Input: x = 123
// Output: 321
// Example 2:
//
// Input: x = -123
// Output: -321
// Example 3:
//
// Input: x = 120
// Output: 21
// Example 4:
//
// Input: x = 0
// Output: 0
//
//
// Constraints:
//
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const number = Math.abs(x).toString().split("");

  let start = 0;
  let end = number.length - 1;

  while (start < end) {
    let tempStart = number[start];
    number[start] = number[end];
    number[end] = tempStart;
    start++;
    end--;
  }

  let numberInt = number.join("");

  if (numberInt > Math.pow(2, 31) - 1) {
    return 0;
  }

  return x < 0 ? -numberInt : numberInt;
};

// Time: O(N) -> length of number
// Space: O(1)

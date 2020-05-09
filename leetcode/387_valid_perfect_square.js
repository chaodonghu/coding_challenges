// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
// Note: Do not use any built-in library function such as sqrt.
//
// Example 1:
//
// Input: 16
// Output: true
// Example 2:
//
// Input: 14
// Output: false
/**
 * @param {number} num
 * @return {boolean}
 */
// Solution 1:
// divide the num in half and add 2
var isPerfectSquare = function (num) {
  for (let i = 0; i < num / 2 + 2; i++) {
    if (i * i == num) {
      return true;
    }
  }
  return false;
};

// Solution 2:
// Utilize binary search to a combination of numbers from 1 to the current number
var isPerfectSquare = function (num) {
  if (num < 1) {
    return false;
  }

  // set the bounds
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }

  return false;
};

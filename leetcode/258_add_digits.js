// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// Example:
//
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   if (num < 10) return num;
   const numArray = num.toString().split('');
   let sum = 0;

   for (const numStr of numArray) {
       sum += parseInt(numStr);
   }

   return addDigits(sum);
};

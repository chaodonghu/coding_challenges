// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example 1:
//
// Input: 16
// Output: true
// Example 2:
//
// Input: 5
// Output: false
// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n === 0) {
        return false;
    }
    while (n !== 1) {
        if (n % 4 !== 0) {
            return false;
        }
        n = n / 4
    }
    return true;

};

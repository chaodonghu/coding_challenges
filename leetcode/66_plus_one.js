/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // loop from the right to the left (last to first elements)
    for (let i = digits.length - 1; i >= 0; i--) {
        // if the element is a 9, then increment the element and return it's digits
        if (digits[i] != 9) {
            digits[i] ++;
            return digits;
        } else {
            // if the element is a 9, then set it to 0 and keep looping through
            digits[i] = 0;
        }
    }

    // if we go through all the digits and we didn't return on line 11 (because element is 9) we will have [0, 0] etc. Therefore add a 1 to the beginning of the array and return its digits
    digits.unshift(1);
    return digits;
};

// Time -> O(N)
// Space -> O(1)

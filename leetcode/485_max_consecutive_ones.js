// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
//
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curr = 0;

    nums.forEach((e) => {
        // set max to be the maximum of either the current max or the current plus current element
        max = Math.max(max, curr += e);
        // if current element is 0, reset current to be 0
        if (!e) curr = 0;
    });

    return max;
};

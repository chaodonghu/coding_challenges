// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
//
// Input: [2,2,3,2]
// Output: 3
// Example 2:
//
// Input: [0,1,0,1,0,1,99]
// Output: 99

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dict = new Map()

    for (num of nums) {
        if (!dict.has(num)) {
            dict.set(num, 1)
        } else if (dict.get(num) === 2) {
            dict.delete(num);
        } else {
            dict.set(num, dict.get(num) + 1);
        }
    }

    return dict.keys().next().value;
};

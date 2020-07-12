// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Recursive solution
var subsets = function(nums) {
    let output = [];

    var helper = function(start, temp, output) {
        output.push(temp);
        for (let i = start; i < nums.length; i++) {
            helper(i + 1, [...temp, nums[i]], output);
        }
    }

    helper(0, [], output);
    return output;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Iterative solution
var subsets = function(nums) {
    let output = [[]];

    let n = nums.length;

    for (num of nums) {
        for(curr of output) {
            output = [...output, [...curr, num]];
        }
    }

    return output;
}

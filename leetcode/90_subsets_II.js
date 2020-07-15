// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();


    let output = [];

    const pick = (current, start) => {
        output.push(current)

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            } else {
                pick(current.concat(nums[i]), i + 1);
            }


        }
    }

    pick([], 0);

    return output;
};

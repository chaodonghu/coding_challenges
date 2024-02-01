/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  // 1. Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  let result = [];

  // Go through groups of 3 nums at a time, start at the 3rd index.
  for (let i = 2; i < nums.length; i += 3) {
    // if the first and last element of the group is great than k then return an empty array
    if (nums[i] - nums[i - 2] > k) {
      return [];
    }

    // if the first and last elements of the 3 integer group are within a difference of k then push all 3 into a array
    result.push([nums[i - 2], nums[i - 1], nums[i]]);
  }

  return result;
};

// Time: O(NlogN) - sort then go through the entire array
// Space: O(N)
// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.
//
//
//
// Example 1:
//
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
//
// Input: nums = [1,2,3], k = 3
// Output: 2
//
//
// Constraints:
//
// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  // we will keep adding to our running sum
  let runningSum = 0;
  // instantiate a map of all the sums possible counting from index 0;
  let map = { 0: 1 };

  // loop through all our nums
  for (let num of nums) {
    // add our current number to the running sum
    runningSum += num;
    // if we have already encountered a sum that equals to the running sum minus the target then increment our count
    // this means that we have a subarray that adds up to our target
    if (map[runningSum - k]) {
      count += map[runningSum - k];
    }

    // add that we have a running sum that we encountered
    map[runningSum] = (map[runningSum] || 0) + 1;
  }

  return count;
};

// Time: O(N)
// Space: O(N)

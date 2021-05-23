// Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.
//
//
//
// Example 1:
//
// Input: nums = [1,-1,5,-2,3], k = 3
// Output: 4
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
// Example 2:
//
// Input: nums = [-2,-1,2,1], k = 1
// Output: 2
// Explanation: The subarray [-1, 2] sums to 1 and is the longest.
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// -105 <= k <= 105


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let subarrayLength = 0;
  let sum = 0;
  // instantiate a map which tracks the running sum and the index that running sum occurs at
  let map = { 0: -1 };

  nums.forEach((number, i) => {
    sum += number;

    // if the running sum hasn't occured before, add it's index to the map
    if (!map[sum]) {
      map[sum] = i;
    }

    // if the difference between our running sum minus the target has occured as arunning sum before, then we have it's index
    if (map[sum - k]) {
      // therefore our subarray length is the maximum between our current subarray length and our current index minus the last running sum that complements us to add up to the target
      subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
    }
  });

  return subarrayLength;
};

// Time: O(N)
// Space: O(N)

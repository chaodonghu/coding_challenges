// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Your goal is to reach the last index in the minimum number of jumps.
//
// You can assume that you can always reach the last index.
//
//
//
// Example 1:
//
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
//
// Input: nums = [2,3,0,1,4]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // instantiate 3 variables to hold the farthestJump so far, the current's jumps end, and the total # of jumps
  let farthestJump = 0;
  let jumps = 0;
  let currentJumpEnd = 0;

  // loop through the entire array and stop at the last index (no need to check that one)
  for (let i = 0; i < nums.length - 1; i++) {
    // farthest jump is either the current max or the current element we are at plus the index
    farthestJump = Math.max(farthestJump, nums[i] + i);

    // if we are at the index where we have reached the current's jumps end then make our current jump end the farthest jump's index
    if (i === currentJumpEnd) {
      currentJumpEnd = farthestJump;
      jumps++;
    }
  }

  return jumps;
};

// Time: O(N)
// Space: O(1)

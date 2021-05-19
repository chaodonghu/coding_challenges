// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
//
// In one move, you can increment n - 1 elements of the array by 1.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// Example 2:
//
// Input: nums = [1,1,1]
// Output: 0
//
//
// Constraints:
//
// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// The answer is guaranteed to fit in a 32-bit integer.
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let count = 0;
  if (nums.length === 1 || !nums.length) return count;

  nums.sort((a, b) => a - b);

  // find the mid of the sorted array
  let mid = Math.floor(nums.length / 2);

  // we want to match up all the numbers with this target median
  let median = nums[mid];

  // go through all of our nums and add to the count variable how many increments/decrements to match up with the median
  for (let num of nums) {
    count += Math.abs(median - num);
  }

  return count;
};

// Time: O(N log N) since we loop through all the nums and we also do a sort
// Space: O(1)

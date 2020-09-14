// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
//
// Example 1:
//
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:
//
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currElement = nums[i];
    currMax = Math.max(
      currElement * prevMax,
      currElement,
      currElement * prevMin
    );
    currMin = Math.min(
      currElement * prevMax,
      currElement,
      currElement * prevMin
    );

    prevMax = currMax;
    prevMin = currMin;

    globalMax = Math.max(currMax, globalMax);
  }

  return globalMax;
};

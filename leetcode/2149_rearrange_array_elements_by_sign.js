/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  // initiate result array to be the size of nums
  let result = new Array(nums.length);
  // since the first number should be a positive integer, initiate two pointers
  let positiveIndex = 0;
  let negativeIndex = 1;

  // go through the array of nums
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[positiveIndex] = nums[i];
      // increment the positive index by 2
      positiveIndex += 2;
    } else {
      result[negativeIndex] = nums[i];
      // increment the negative index by 2
      negativeIndex += 2;
    }
  }

  return result;
};

// Time: O(N) go through the array of nums
// Space: O(1) only use a result array of the same size as nums
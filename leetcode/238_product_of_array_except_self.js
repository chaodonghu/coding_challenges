// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Example:
//
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
//
// Note: Please solve it without division and in O(n).
//
// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var output = [];
  // instantiate left and right multiplier at one
  var leftMult = 1;
  var rightMult = 1;
  // loop through nums array starting at the right
  for (var i = nums.length - 1; i >= 0; i--) {
    // replace current element index with right multiple
    output[i] = rightMult;
    // increase multiple by element's value
    rightMult *= nums[i];
  }
  for (var j = 0; j < nums.length; j++) {
    // replace current element index with left multiple
    output[j] *= leftMult;
    // increase multiple by element's value
    leftMult *= nums[j];
  }
  // return output array that has been multiplied by every element
  return output;
};

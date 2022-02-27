// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Example:
//
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
//
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let anchor = 0;

  // instantiate second pointer explorer to go through entire array
  for (let explorer = 0; explorer < nums.length; explorer++) {
    // if the explorer pointer does not land on a zero, swap it
    if (nums[explorer] !== 0) {
      // temp should always be a 0
      let temp = nums[anchor];
      // swap the anchor zero with the index of the non zero element
      nums[anchor] = nums[explorer];
      nums[explorer] = temp;
      // increase the index of the anchor as it will be where the zero is now
      anchor++;
    }
  }
};

// Time: O(N) pass through the array once
// Space: O(1), you have two pointers

let moveZerosToLeft = function (A) {
  let anchor = A.length - 1;

  for (let explorer = A.length - 1; explorer >= 0; explorer--) {
    if (A[explorer] !== 0) {
      let temp = A[anchor];
      A[anchor] = A[explorer];
      A[explorer] = temp;
      anchor--;
    }
  }
};

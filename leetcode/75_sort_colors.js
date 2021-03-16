// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
// Note: You are not suppose to use the library's sort function for this problem.
//
// Example:
//
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:
//
// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // instantiate 3 pointers
  let left = 0;
  let curr = 0;
  let right = nums.length - 1;

  // once our current pointer is out of bounds
  while (curr <= right) {
    // instatite the temporary values for us to swap
    let tempLeft = nums[left];
    let tempCurr = nums[curr];
    let tempRight = nums[right];

    // if the current value is 0 then we swap the left most value and the current values
    // increment our left and current pointer
    if (tempCurr === 0) {
      nums[left] = tempCurr;
      nums[curr] = tempLeft;
      left++;
      curr++;
      // if our value is 2 then we swap the current value and the right most value
      // decrement our right pointer and leave current pointer the same
    } else if (tempCurr === 2) {
      nums[right] = tempCurr;
      nums[curr] = tempRight;
      right--;
    } else {
      // we are on a 1 and just increase current pointer
      curr++;
    }
  }

  return nums;
};

// Time: O(N) since we loop through each element in the nums array
// Space: O(1) since we have 3 pointers

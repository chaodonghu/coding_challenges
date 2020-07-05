// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.
//
// Example 1:
//
// Input: [3,4,5,1,2]
// Output: 1
// Example 2:
//
// Input: [4,5,6,7,0,1,2]
// Output: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // get midpoint of the array
    let mid = Math.floor((left + right) / 2);
    // if the mid is greater than the element on the right then move left pointer to mid + 1
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // if the mid is less than the element on the right then move right pointer as mid
      right = mid;
    }
  }
  // once the right pointer is greater than the left pointer than just return the element that the left pointer is on
  return nums[left];
};

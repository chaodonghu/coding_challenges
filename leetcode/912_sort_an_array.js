/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Top down (Merge sort)
var sortArray = function (nums) {
  let len = nums.length;
  // if the length of our nums is less than or equal to 1 then we just have one element or none
  if (len <= 1) return nums;

  // split the nums into two
  let pivot = Math.floor(len / 2);
  // left slice up to the pivot, sort this slice
  let left = sortArray(nums.slice(0, pivot));
  // right slice up to the pivot, sort this slice
  let right = sortArray(nums.slice(pivot));

  // merge our left and right
  return merge(left, right);
};

var merge = function (left, right) {
  let res = [];

  // while we have both halves
  while (left.length && right.length) {
    // if our left is less then our right element then add the left element
    // else add the right element into the res
    res.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  // at the end we'll have to spread the remaining arrays together
  return [...res, ...left, ...right];
};

// Time Complexity: O (N log N)
// Space Complexity: O(N)

// Bottom up (quick sort)
var sortArray = function (nums) {
  let len = nums.length;
  if (len < 2) return nums;
  let pivot = nums[0],
    left = [],
    right = [];

  for (let i = 1; i < len; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return sortArray(left).concat(pivot, sortArray(right));
};

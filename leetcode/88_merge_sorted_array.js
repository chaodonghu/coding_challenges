// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
//
//
//
// Example 1:
//
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
//
//
// Constraints:
//
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Merge and sort
var merge = function (nums1, m, nums2, n) {
  // loop through the numbers in nums2 and set them to the end of nums1
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  // sort nums1 after modifying the array;
  return nums1.sort((a, b) => a - b);
};

// 3 pointers
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // instantiate p1 to be the end of p1 nums
  let p1 = m - 1;
  // instantiate p2 to be the end of p2 nums
  let p2 = n - 1;

  // iterate from the end of nums1 array
  for (let i = m + n - 1; i >= 0; i--) {
    // if our p2 pointer is less than 0 that means we have finished iterating the nums2 array
    if (p2 < 0) {
      break;
    }

    // if our p1 pointer is either at the first index and it's value is greater than the current value at p2 then replace the index
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      // our value at the p2 pointer is greater so replace the index
      nums1[i] = nums2[p2--];
    }
  }

  // return our newly sorted array
  return nums1;
};
// Time: O(N + M) where N is the length of the nums1 array and M is the length of the nums2 array
// Space: O(1), we are modifying the nums1 array in place

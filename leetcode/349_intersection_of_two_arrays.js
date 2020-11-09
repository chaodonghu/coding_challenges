// Given two arrays, write a function to compute their intersection.
//
// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:
//
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  // create a new set from all unique values in nums1
  const set = new Set(nums1);
  // create a new array from the set of unique values after filtering nums2 array of all values in the unique set.
  return [...new Set(nums2.filter((n) => set.has(n)))];
}

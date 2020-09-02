// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.
//
// Example 1:
//
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true
// Example 2:
//
// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true
// Example 3:
//
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = (nums, k, t) => {

  // create a new array with value and index objects
  const map = nums
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);

  // create two pointers which we will utilize as indexes
  let l = 0;
  let r = 1;

  // loop until right pointer is greater than our created array
  while (r < map.length) {
    // find absolute difference
    const diff = Math.abs(map[r].val - map[l].val);
    // find range
    const range = Math.abs(map[r].idx - map[l].idx);

    // if the absolute difference and range satisfies return true
    if (diff <= t && range <= k) return true;
    else if (diff > t) l++;
    else if (range > k) r++;

    // when we increase l++ it might equal r so increase right pointer
    if (l === r) r++;
  }

  return false;
};

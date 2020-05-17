// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

// Approach 1: Hash Table
var singleNumber = function (nums) {
  // utilize hashmap to avoid the O(N) time required for searching the elements
  const numsHash = {};

  // loop through nums array and add to hash map to setup a key/value pair
  for (const num of nums) {
    if (numsHash[num]) {
      numsHash[num] += 1;
    } else {
      numsHash[num] = 1;
    }
  }

  // iterate through hash map and return the element which appears once
  for (const i in numsHash) {
    if (numsHash[i] < 2) {
      return i;
    }
  }
};

// Time complexity: O(N), loop through the entire array of nums and add to hashmap then utilize the hash map to pop the desired element O(1)
// Space complexity: O(N), the space required by the hash table is proportional to the number of elements in nums

// Approach 2:  Math
var singleNumber = function (nums) {
  // Concept is that -> 2 * (a + b + c) - (a + a + b + b + c) = c
  return (
    2 * [...new Set(nums)].reduce((a, b) => a + b, 0) -
    nums.reduce((a, b) => a + b, 0)
  );
};
// Time complexity: O(N), create a new set from the array and utilize reduce to iterate through the set
// Space complexity: O(N), create a new unique array set

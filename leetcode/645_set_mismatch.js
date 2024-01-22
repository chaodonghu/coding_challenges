// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
//
// You are given an integer array nums representing the data status of this set after the error.
//
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
//
//
//
// Example 1:
//
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:
//
// Input: nums = [1,1]
// Output: [1,2]
//
//
// Constraints:
//
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let missing = -1;
  let duplicate = -1;

  // initiate a map to store the frequencies of the numbers
  let frequencies = new Map();

  // go through the nums array and store the frequencies
  for (let num of nums) {
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  // iterate from 1 to nums.length and go through the frequencies map and obtain the missing and duplicate
  for (let i = 1; i <= nums.length; i++) {
    if (frequencies.get(i) === 2) {
      duplicate = i;
    }

    if (!frequencies.has(i)) {
      missing = i;
    }
  }

  return [duplicate, missing];
};

// Time: O(N) since we traverse over the nums array of size n for each of the numbers from 1 to n
// Space: O(1)

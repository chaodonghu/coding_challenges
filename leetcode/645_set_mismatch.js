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
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Brute force
var findErrorNums = function (nums) {
  let dup = -1;
  let missing = -1;
  for (let i = 1; i <= nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == i) count++;
    }
    if (count == 2) dup = i;
    else if (count == 0) missing = i;

    if (dup > 0 && missing > 0) {
      break;
    }
  }
  return [dup, missing];
};

// Time: O(N^2) since we traverse over the nums array of size n for each of the numbers from 1 to n
// Space: O(1)

var findErrorNums = function (nums) {
  let map = {};
  let dup = -1;
  let missing = 1;
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let i = 1; i <- nums.length; i++) {
    if (map[i] === 2) {
      dup = i;
    }

    if (!map[i]) {
      missing = i;
    }
  }
  return [dup, missing];
};

// Time: O(N^2) since we traverse over the nums array of size n for each of the numbers from 1 to n
// Space: O(1)

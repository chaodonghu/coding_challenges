// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  // sort array so we can do a binary search
  nums.sort((a, b) => a - b);

  // instantiate pointers at head and tail
  let head = 0;
  let tail = nums.length - 1;

  // loop through nums array
  for (let i = 0; i < nums.length; i++) {
    // if the previous element and the current element are the same then skip
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    head = i + 1;
    tail = nums.length - 1;
    let sum = 0;

    while (head < tail) {
      // sum up all 3 pointers
      sum = nums[i] + nums[head] + nums[tail];
      if (sum === 0) {
        // if the sum is 0, then push this result
        result.push([nums[i], nums[head], nums[tail]]);
        head++;
        tail--;

        while (head < tail && nums[head] === nums[head - 1]) {
          head++;
        }
        while (head < tail && nums[tail] === nums[tail + 1]) {
          tail--;
        }
      } else if (sum > 0) {
        tail--;
      } else {
        head++;
      }
    }
  }

  return result;
};

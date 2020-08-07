// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// with extra space -> O(N)
var findDuplicates = function (nums) {
  let numbers = new Set();
  let result = [];
  for (num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      result.push(num);
    }
  }
  return result;
};

// without extra space -> O(1)
var findDuplicates = function (nums) {
  let res = [];
  let index;
  let i;

  for (i = 0; i < nums.length; i++) {
    index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) res.push(index + 1);
    else nums[index] *= -1;
  }

  return res;
};

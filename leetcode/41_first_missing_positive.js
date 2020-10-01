// Given an unsorted integer array, find the smallest missing positive integer.
//
// Example 1:
//
// Input: [1,2,0]
// Output: 3
// Example 2:
//
// Input: [3,4,-1,1]
// Output: 2
// Example 3:
//
// Input: [7,8,9,11,12]
// Output: 1
// Follow up:
//
// Your algorithm should run in O(n) time and uses constant extra space.

// sort first (N O log N)
var firstMissingPositive = function (nums) {
  const positiveNumbers = nums.filter((i) => i > 0);
  positiveNumbers.sort((a, b) => a - b);

  let target = 1;
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] === target) {
      target++;
    }
  }

  return target;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let curr = nums[i];

    if (
      (prev % 2 === 0 && curr % 2 === 0) ||
      (prev % 2 !== 0 && curr % 2 !== 0)
    ) {
      return false;
    }
  }

  return true;
};

// Time: O(N), iterate through the entire array of nums
// Space: O(1), no extra space used
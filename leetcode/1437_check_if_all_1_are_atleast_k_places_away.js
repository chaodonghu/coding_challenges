/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 // Time: O(N)
var kLengthApart = function (nums, k) {
  let counter = k;

  for (let num of nums) {
    // if we hit a 1
    if (num === 1) {
      // if the space between the last 1 is less than k then return false
      if (counter < k) {
        return false;
      }
      // reinitialize the counter
      counter = 0;
    } else {
      // increase the counter
      counter++;
    }
  }

  return true;
};

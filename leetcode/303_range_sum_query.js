/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // Make an array with the prefix sums
  // Preprocess the array so each indice represents the sum at that point
  this.sums = [];

  let sum = 0;

  for (let num of nums) {
    sum += num;
    this.sums.push(sum);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // P[right] - P[left - 1] since we already have initiated the prefix sums
  return this.sums[right] - (left > 0 ? this.sums[left - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Time: O(N) in the worst case if left is 0 and right is the length of the sums array we need to go through the entire array
// Space: O(N) we create a new sums array which is the length of the original nums array

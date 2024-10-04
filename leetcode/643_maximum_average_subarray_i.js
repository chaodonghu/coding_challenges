/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let maxAverage = -Infinity;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    // add the current right pointer to our sum
    sum += nums[right];
    // once we established our sliding window
    if (right - left + 1 === k) {
      // establish our max average
      maxAverage = Math.max(maxAverage, sum / k);
      // subtract the left pointers digit
      sum -= nums[left];
      // increase our left pointer
      left++;
    }
  }

  return maxAverage;
};

// Time: O(N)
// Space: O(1)

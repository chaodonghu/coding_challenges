// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//
//
//
// Example 1:
//
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
//
//
// Constraints:
//
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let diff = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    // if our difference is 0 then break out of the iterations we found the closest 3sum to equal our target
    if (diff === 0) break;
    // have a head pointer
    let head = i + 1;
    // have a tail pointer
    let tail = nums.length - 1;

    while (head < tail) {
      // add up all 3 pointers
      let sum = nums[i] + nums[head] + nums[tail];

      // if the absolute difference between our target and sum is less than our current diff
      if (Math.abs(target - sum) < Math.abs(diff)) {
        // change our diff to the difference
        diff = target - sum;
      }

      // if our sum is less then the target, increase our head pointer else decrease the tail pointer
      if (sum < target) {
        head++;
      } else {
        tail--;
      }
    }
  }

  return target - diff;
};

// Time: O(N^2)
// Space: O(N) due to sorting

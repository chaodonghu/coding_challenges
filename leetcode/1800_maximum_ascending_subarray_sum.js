/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let currentSum = nums[0]
    let maxSum = currentSum;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i]; // Extend the existing ascending subarray
        } else {
            currentSum = nums[i] // Start new subarray
        }

        maxSum = Math.max(maxSum, currentSum) // update our maxSum after each element
    }

    return maxSum;
};

// Time: O(N)
// Space: O(1)
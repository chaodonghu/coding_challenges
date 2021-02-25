// Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
//
// Follow up: Could you solve it in O(n2) runtime?
//
//
//
// Example 1:
//
// Input: nums = [-2,0,1,3], target = 2
// Output: 2
// Explanation: Because there are two triplets which sums are less than 2:
// [-2,0,1]
// [-2,0,3]
// Example 2:
//
// Input: nums = [], target = 0
// Output: 0
// Example 3:
//
// Input: nums = [0], target = 0
// Output: 0
//
//
// Constraints:
//
// n == nums.length
// 0 <= n <= 300
// -100 <= nums[i] <= 100
// -100 <= target <= 100

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let count = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        let head = i + 1;
        let tail = nums.length - 1;

        while (head < tail) {
            let sum = nums[i] + nums[head] + nums[tail];

            if (sum < target) {
                // once we find 3 combinations where the sum is less than the target, since our nums is sorted, we know that all the pairs between the tail and the head will also sum up to be lower then the target so add the # of numbers within that range
                count += (tail - head);
                head++
            } else {
                tail--;
            }
        }
    }

    return count;
};


// Time: O(N^2)
// Space: O(1)

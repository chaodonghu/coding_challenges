// You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
//
// Return the maximum score you can get by erasing exactly one subarray.
//
// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
//
//
//
// Example 1:
//
// Input: nums = [4,2,4,5,6]
// Output: 17
// Explanation: The optimal subarray here is [2,4,5,6].
// Example 2:
//
// Input: nums = [5,2,1,2,5,2,1,2,5]
// Output: 8
// Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
//
//
// Constraints:
//
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    // our seen map stores the index of the unique numbers
    let seen = {};
    let runningSum = 0;
    let output = 0;
    let pointer = 0;

    // loop through the nums array
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        // if our currentNum is has not been seen yet
        if (seen[currentNum] !== undefined) {
            // and while our pointer is less than the current nums last index
            while (pointer < seen[currentNum] + 1) {
                // subtract the number from our running sum
                runningSum -= nums[pointer];
                pointer++;
            }
        }

        // replace the current nums index in our seen map
        seen[currentNum] = i;
        // increase our running sum
        runningSum += currentNum;
        // update our output
        output = Math.max(output, runningSum);
    }

    return output;
};

// Time: We iterative over each array element at most twice, first we add it to the current subarray using the end pointer, second to remove it from the subarray using the start pointer. O(N)
// Space: we are using a map to track all the unique elements, at worse we store all of the elements in our map O(N)

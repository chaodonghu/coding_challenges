/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // iterate through the array and check each adjacent pair
        // modulo for wrap around elements (checking first and last element)
        if (nums[i] > nums[(i + 1) % n]) {
            // if there is a break, where the current element is greater than the next element then add to our count
            count++;
        }
        // if there are multiple breaks, then it's impossible to sort with only one rotation
        if (count > 1) {
            return false;
        }
    }
    return true
};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height) return 0;

    let leftMax = [];
    let rightMax = [];
    let totalWater = 0;
    let length = height.length;
    // left max instantiate it as the first height in our array
    leftMax[0] = height[0];
    // right max instantiate it as the last height in our array
    rightMax[length-1] = height[length - 1];


    for (let i = 1; i < length; i++) {
        // the left max at the index is either the max of the height currently or our previous max
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    // go from right to left, start at second last index
    for (let j = length - 2; j >= 0; j--) {
        rightMax[j] = Math.max(height[j], rightMax[j + 1]);
    }

    // start at index 1 since at the 0th index the rain cannot be trapped anyways
    for (let i = 1; i < length - 1; i++) {
        // our total water is the minimum of the index of either going from left to right or right to left minus the height of the building
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return totalWater;
};

// Time Complexity: O(N)
// Space Complexity: O(N)

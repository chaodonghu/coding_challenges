/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  // have our seen map that stores the number and it's index
  let seen = {};
  // our max is running sum
  let max = 0;
  let output = 0;
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (seen[num] !== undefined) {
      while (pointer < seen[num] + 1) {
        max -= nums[pointer];
        pointer++;
      }
    }

    seen[num] = i;
    max += num;
    output = Math.max(output, max);
  }

  return output;
};

// Time: We iterative over each array element at most twice, first we add it to the current subarray using the end pointer, second to remove it from the subarray using the start pointer. O(N)
// Space: we are using a map to track all the unique elements, at worse we store all of the elements in our map O(N)

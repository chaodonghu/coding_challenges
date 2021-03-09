// You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.
//
// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
//
// Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.
//
// Each range [a,b] in the list should be output as:
//
// "a->b" if a != b
// "a" if a == b
//
//
// Example 1:
//
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: ["2","4->49","51->74","76->99"]
// Explanation: The ranges are:
// [2,2] --> "2"
// [4,49] --> "4->49"
// [51,74] --> "51->74"
// [76,99] --> "76->99"
// Example 2:
//
// Input: nums = [], lower = 1, upper = 1
// Output: ["1"]
// Explanation: The only missing range is [1,1], which becomes "1".
// Example 3:
//
// Input: nums = [], lower = -3, upper = -1
// Output: ["-3->-1"]
// Explanation: The only missing range is [-3,-1], which becomes "-3->-1".
// Example 4:
//
// Input: nums = [-1], lower = -1, upper = -1
// Output: []
// Explanation: There are no missing ranges since there are no missing numbers.
// Example 5:
//
// Input: nums = [-1], lower = -2, upper = -1
// Output: ["-2"]
//
//
// Constraints:
//
// -109 <= lower <= upper <= 109
// 0 <= nums.length <= 100
// lower <= nums[i] <= upper
// All the values of nums are unique.
var findMissingRanges = function (nums, lower, upper) {
  let ranges = [];

  // Insert lower bound into the beginning of the nums
  nums.unshift(lower);

  // Insert upper bound into the end of the nums
  nums.push(upper);

  // Iterate through all nums. We will compare the current num with the next one
  // Therefore we end the loop at nums.length-1
  // Because nums[nums.length-1] is upper
  for (let i = 0; i < nums.length - 1; i++) {
    // To make it easier,
    // We're going to assume that a range is missing
    // So we're going to get that missing range
    // For example, if nums[i] == 1 and nums[i+1] == 4
    // then l = 2
    let l = nums[i] + 1;
    // and r = 3
    let r = nums[i + 1] - 1;
    // so we already know our missing range is 2->3

    // if our index is 0, then we're at the lower bound of nums
    // And so, again, we assume our original nums didn't include the lower bound
    // Therefore, include the lower bound in the missing range
    if (i == 0) l--;

    // If the next index is nums.length-1 then we're at the upper bound of nums
    // And so, again, we assume our original nums didn't include the upper bound
    // Therefore, include the upper bound in the missing range
    if (i + 1 == nums.length - 1) r++;

    // Now we actually check if the numbers are missing.
    // If our left value is ever greater than our right value
    // then there are no digits between the left value and the right value
    if (l > r) continue;

    // If our left and our right are equal, then we're not missing a range, we're
    // missing a single digit
    if (l == r) ranges.push(`${l}`);
    // Otherwise our original assumption is true and we're missing a full range
    else ranges.push(`${l}->${r}`);
  }

  return ranges;
};

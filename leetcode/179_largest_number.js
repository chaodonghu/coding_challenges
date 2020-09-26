// Given a list of non negative integers, arrange them such that they form the largest number.
//
// Example 1:
//
// Input: [10,2]
// Output: "210"
// Example 2:
//
// Input: [3,30,34,5,9]
// Output: "9534330"
// Note: The result may be very large, so you need to return a string instead of an integer.
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // if all numbers in the array equal to 0, return 0
  if (nums.every((e) => e === 0)) return "0";
  // convert all the numbers to string and sort the array based on comparison of the sum of the current and next element
  // join the array at the end
  return nums
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
};

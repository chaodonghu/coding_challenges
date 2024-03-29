// Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
//
// You may assume that each input would have exactly one solution and you may not use the same element twice.
//
//
//
// Example 1:
//
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:
//
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:
//
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
//
//
// Constraints:
//
// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in increasing order.
// -1000 <= target <= 1000
// Only one valid answer exists.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // set two pointers
  let head = 0;
  let tail = numbers.length - 1;

  // while the head pointer does not reach the end of the numbers array
  while (head < numbers.length) {
    let sum = numbers[head] + numbers[tail];

    // if the elements at our pointers equal the target, return the indexes
    if (sum === target) {
      return [head + 1, tail + 1];
    }

    // if the sum of our elements at our pointers is less than our target than move our head pointer
    if (sum < target) {
      head++;
    } else {
      // decrease the tail pointer
      tail--;
    }
  }
};

// Time: O(N)
// Space: O(1)

// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
//
// Note:
//
// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:
//
// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let permute = (arr, sum, index) => {
    if (sum > n) return;
    if (arr.length === k) {
      if (sum === n) return result.push(arr);
    }

    for (let i = index; i < 10; i++) {
      let newArray = [...arr, i];
      let newSum = sum + i;
      permute(newArray, newSum, i + 1);
    }
  };

  permute([], 0, 1);

  return result;
};

// []
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4]
// [1, 2, 3, 5]
// [1, 2, 3, 6]
// [1, 2, 3, 7]
// [1, 2, 3, 8]
// [1, 2, 3, 9]
// [1, 2, 4]
// [1, 2, 5]
// [1, 2, 6]
// [1, 2, 7]
// [1, 2, 8]
// [1, 2, 9]
// [1, 3]
// [1, 3, 4]
// [1, 3, 5]
// [1, 3, 6]
// [1, 3, 7]
// [1, 3, 8]
// [1, 3, 9]
// [1, 4]
// [1, 4, 5]

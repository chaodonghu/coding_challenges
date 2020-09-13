// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//
// The same repeated number may be chosen from candidates unlimited number of times.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:
//
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
//
//
// Constraints:
//
// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// Each element of candidate is unique.
// 1 <= target <= 500

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // set up empty result array
  let result = [];

  // recursive function with remainder, index and current array
  let recur = (remain, index, curr) => {
    if (remain < 0) return;

    // if there is no remainder then push the entire current array to the result
    if (!remain) {
      result.push([...curr]);
    }

    // go through the candidates array
    for (let i = index; i < candidates.length; i++) {
      // push the current candidate into the current array
      curr.push(candidates[i]);
      // recursively call the remainder minus the current candidates element
      recur(remain - candidates[i], i, curr);
      // remove the last element from the current array
      curr.pop();
    }
  };

  recur(target, 0, []);
  return result;
};

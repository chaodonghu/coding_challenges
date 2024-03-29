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

var combinationSum = function (candidates, target) {
  const result = [];

  const permute = (arr, sum, index) => {
    // if our new sum is greater than the target then return out permutation
    if (sum > target) return;
    // if the sum is equal to the target then push what we have to the result array
    if (sum === target) result.push(arr);

    for (let i = index; i < candidates.length; i++) {
      // backtrack and add the current candidate to the new array and the sum
      const newArray = [...arr, candidates[i]];
      const newSum = sum + candidates[i];
      permute(newArray, newSum, i);
    }
  };

  permute([], 0, 0);
  return result;
};

// [2]
// [2, 2]
// [2, 2, 2]
// [2, 2, 2. 2] ->
// [2, 2, 2. 3]
// [2, 2, 2. 6]
// [2, 2, 2. 7]
// [2, 2, 3] ->
// [2, 2, 3. 3]
// [2, 2, 3. 6]
// [2, 2, 3. 7]
// [2, 2, 3. 7]
// [2, 2, 6]
// [2, 2, 7]
// [2, 3]
// [2, 3, 3] ->
// [2, 3, 6]
// [2, 3, 7]
// [2, 6]
// [2, 7]
// [3]
// [3, 3]
// [3, 3, 3]
// [3, 3, 6]
// [3, 3, 7]
// [3, 6]
// [3, 7]
// [6]
// [6, 7]
// [7]
// [7, 7]

// Dp solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // instantiate a dp array that holds all the combinations of c candidates for that index
  const dp = new Array(target + 1).fill(0).map(() => []);

  // go through our candidates
  for (let c of candidates) {
    // for each candidate populate our dp array
    for (let currTarget = 1; currTarget < target + 1; currTarget++) {
      // if the current candidate is greater than our current index in the dp array then it cannot be a combination
      if (c > currTarget) {
        continue;
      }
      // if the current candidate equals our current index in the dp array push it
      if (c === currTarget) {
        dp[currTarget].push([c]);
      }

      // go through our previous builds where the current target minus the candidate
      // this means we can have the current candidate plus the previous built up list as a combination for our current index in the dp array
      for (let list of dp[currTarget - c]) {
        dp[currTarget].push([...list, c]);
      }
    }
  }

  // our last index in the dp array will give us all the combinations for our target
  return dp[dp.length - 1];
};

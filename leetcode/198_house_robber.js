// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
//
// Example 1:
//
// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:
//
// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // Instead of creating an array to save all of the previous maxes just take the previous two maxes
  // We only need to take the previous two maxes
  // because at most we would only go two spaces away
  // to check our maximum value
  let prevMax = 0;
  let twoAwayFromMax = 0;
  nums.forEach(house => {
    // destructuring assignment to swap prevMax and twoAwayFromMax values
    [prevMax, twoAwayFromMax] = [
      Math.max(house + twoAwayFromMax, prevMax),
      prevMax
    ];
  });
  return prevMax;
};

var rob = function(nums) {
  if (!nums.length) return 0;

  let size = nums.length;
  let A = new Array(size);

  A[0] = nums[0];
  A[1] = Math.max(A[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    // the current element is either the max of the previous element or the 2 previous element plus current element in nums
    A[i] = Math.max(A[i - 1], A[i - 2] + nums[i]);
  }

  return A[size - 1];
};

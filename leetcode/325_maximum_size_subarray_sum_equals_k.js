/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let subarrayLength = 0;
  let sum = 0;
  let map = { 0: -1 };

  nums.forEach((number, i) => {
    sum += number;
    if (!map[sum]) {
      map[sum] = i;
    }

    if (map[sum - k]) {
      subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
    }
  });

  return subarrayLength;
};

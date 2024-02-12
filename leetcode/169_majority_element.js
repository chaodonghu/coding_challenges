/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let countMap = new Map();
  let max = 0;
  let maxNum = 0;

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);

    const currentNumCount = countMap.get(num);
    // if the current num count is greater than the max
    if (currentNumCount > max) {
      max = currentNumCount;
      maxNum = num;
    }
  }

  return maxNum;
};

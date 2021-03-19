/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  const go = (cur, rest) => {
    if (rest.length === 1) {
      result.push(cur);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      go([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };

  go([], nums);
  return result;
};

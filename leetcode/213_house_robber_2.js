/**
 * @param {number[]} nums
 * @return {number}
 */
var loot = function (nums) {
  let loot = [];

  if (!nums.length) return 0;

  nums.forEach((num, i) => {
    if (i === 0) {
      loot.push(num);
    } else if (i === 1) {
      loot.push(Math.max(num, loot[i - 1]));
    } else {
      loot.push(Math.max(loot[i - 1], num + loot[i - 2]));
    }
  });

  return loot[loot.length - 1];
};

var rob = function (nums) {
  let length = nums.length;

  if (length === 0) {
    return 1;
  }

  if (length <= 3) {
    return Math.max(nums);
  }

  return Math.max(loot(nums.slice(0, -1), loot(nums.slice(1))));
};

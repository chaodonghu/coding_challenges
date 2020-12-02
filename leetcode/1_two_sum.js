/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // if there is no complement in the array then set it
    if (map.get(num) === undefined) {
      // set the complement and their indicy
      map.set(target - num, i);
    } else {
      // get both indicies of the complements that add up to the target
      return [map.get(num), i];
    }
  }
};

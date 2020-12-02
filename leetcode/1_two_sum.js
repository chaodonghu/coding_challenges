/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force -> O(N^2)
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// O(N) hash map
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

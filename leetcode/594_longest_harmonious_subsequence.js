/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = {};
  let result = 0;
  // make a map of all the nums in the array and their occurances
  for (let num of nums) {
    map[nums] = map[nums] + 1 || 1;
  }

  // loop through the map and if the current keys + 1 value exists in the map then take the max of
  // either the current max or the keys value + the next numbers keys value
  for (let key in map) {
    if (map[parseInt(key) + 1]) {
      result = Math.max(result, map[key] + map[parseInt(key) + 1]);
    }
  }

  return result;
}

// Space: O(1)
// Time: O(N)

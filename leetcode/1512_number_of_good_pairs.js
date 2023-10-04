/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = {};
  let count = 0;

  // loop through our nums
  for (num of nums) {
    // add to the count our map if it exists or add 0
    count += map[num] || 0;
    // update our map with the number of occurances of the number, if it is not in the map initialize it's count to 1
    map[num] = (map[num] || 0) + 1;
  }

  return count;
};

// Time: O(N)
// Space: O(N)

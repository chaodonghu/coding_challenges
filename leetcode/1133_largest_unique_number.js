/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function (A) {
  // loop through the numbers and place it into a map with the values being their frequencies
  let map = {};
  for (let num of A) {
    map[num] = (map[num] || 0) + 1;
  }

  let max = Number.MIN_SAFE_INTEGER;

  // loop through the map and if it's frequency is equal to 1, update the max
  Object.keys(map).forEach((v) => {
    if (map[v] === 1) {
      max = Math.max(max, v);
    }
  });

  // if our max is still our minimum safe integer then return -1 else return the max
  return max === Number.MIN_SAFE_INTEGER ? -1 : max;
};

// Time: O(N) we loop through the numbers once and then access each key in O(1) time
// Space; O(N) we will need to store all the numbers if all frequencies equal to 1

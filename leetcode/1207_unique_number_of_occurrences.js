/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {};

  for (let el of arr) {
    map[el] = (map[el] || 0) + 1;
  }

  // create a new set of the map's values size and if that equals the original object keys
  return new Set(Object.values(map)).size === Object.keys(map).length;
};

// Time; O(N)
// Space: O(1)
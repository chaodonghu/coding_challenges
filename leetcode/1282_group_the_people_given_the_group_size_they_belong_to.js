/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  // keep a hash map where
  // key represents the size of the group
  // value is an array representing the indicies of the person
  let map = {};

  let res = [];

  for (let person = 0; person < groupSizes.length; person++) {
    let size = groupSizes[person];

    if (size === 1) {
      res.push([person]);
      continue;
    }
    if (map[size]) {
      map[size] = [...map[size], person];

      // once the array/group has reached capacity, evict it from the map and push to the result
      if (map[size].length === size) {
        res.push(map[size]);
        delete map[size];
      }
    } else {
      // initiate a new key
      map[size] = [person];
    }
  }

  return res;
};

// Time O(N)
// Space: O(N)

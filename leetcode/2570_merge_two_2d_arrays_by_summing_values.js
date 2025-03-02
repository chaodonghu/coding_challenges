/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let arrayMap = {};

  for (let [id, val] of nums1) {
    if (!arrayMap[id]) {
      arrayMap[id] = val;
    } else {
      arrayMap[id] = arrayMap[id] + val;
    }
  }

  for (let [id, val] of nums2) {
    if (!arrayMap[id]) {
      arrayMap[id] = val;
    } else {
      arrayMap[id] = arrayMap[id] + val;
    }
  }

  // Convert the arrayMap into a sorted array
  // The object should already be sorted
  return Object.entries(arrayMap).map(([key, val]) => [Number(key), val]);
};

// Time: O(N + M)
// Space: O(N + M)
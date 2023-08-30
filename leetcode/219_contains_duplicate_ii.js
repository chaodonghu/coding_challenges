/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    // if the map already has the key that means we haven't hit the k max of the map yet, we can return true since we satisfy that we found a duplicate and the difference betwen the indexes is <= k
    if (map.has(key)) {
      return true;
    }

    // add to the map
    map.set(key);

    // if the size of the hash table is greater than k, remove the oldest item
    if (map.size > k) {
      map.delete(nums[i - k]);
    }
  }

  return false;
};

// Time: O(N)
// Space: O(min(n, k)) which is the size of our sliding window

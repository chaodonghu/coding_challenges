/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // start our two pointers
    let left = 1;
    let right = n;

    // while our left is less than our right
    while (left < right) {
      // get out mid
      let mid = left + Math.floor((right - left) / 2);
      // if mid is not a bad version then that means the first bad version lies on the right of the mid since everything before the mid is not bad
      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        // if the mid is the bad version then the first bad version must lie to the left of the mid so shrink our binary search
        right = mid;
      }
    }

    // once left is greater or equal to mid we have our first bad version
    return left;
  };
};

// Time: O(log N), the search is halved in time
// Space: O(1)

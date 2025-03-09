/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // global white count
  let whiteCount = 0;
  let count = blocks.length;
  // sliding window start from the left
  let left = 0;

  // move right pointer
  for (let right = 0; right < blocks.length; right++) {
    // if the pointer on the right is on a white block, increment our white count
    if (blocks[right] === "W") {
      whiteCount++;
    }

    // if k consecutive elements are found (the sliding window size equals k)
    if (right - left + 1 === k) {
      // update our count to be the minimum of either the global count or the white count
      count = Math.min(count, whiteCount);

      //   setup to move the sliding window
      // if our left pointer is on a white block, decrement our white count and move the sliding window
      if (blocks[left] === "W") {
        whiteCount--;
      }

      // move our sliding window
      left++;
    }
  }

  return count;
};

// Time: O(N) since we go through every element in the array
// Space: O(1) since we are using a constant amount of space

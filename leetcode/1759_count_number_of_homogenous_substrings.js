/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  let left = 0;
  let res = 0;

  // similar to a sliding window
  for (let right = 0; right < s.length; right++) {
    // if the letter at the left pointer is equal to the letter on the right pointer then add the length of this window to our res
    if (s[left] === s[right]) {
      res += right - left + 1;
    } else {
      // they are not equal so the right letter is homogenous by itself
      res += 1;
      // reset our window by shrinking it
      left = right;
    }
  }

  return res % (Math.pow(10, 9) + 7);
};

// Time: O(N)
// Space: O(1)

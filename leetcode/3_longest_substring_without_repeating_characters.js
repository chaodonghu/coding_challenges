// Given a string, find the length of the longest substring without repeating characters.
//
// Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  // until the right pointer reaches the length of the string
  while (right < s.length) {
    // if we don't have a duplicate character
    if (!set.has(s.charAt(right))) {
      // at right pointer character to the set
      set.add(s.charAt(right));
      // update max substring length either current max or size of non duplicate set
      maxSubstringLength = Math.max(maxSubstringLength, set.size);
      // increase right pointer
      right++;
    } else {
      // remove the character at the left from non duplicate set
      set.delete(s.charAt(left));
      // increase left pointer
      left++;
    }
  }

  return maxSubstringLength;
};

// Time: O(N) since we pass through the string twice with two pointers
// Space: O(1) our set

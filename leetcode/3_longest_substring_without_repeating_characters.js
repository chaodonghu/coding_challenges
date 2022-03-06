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
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // initialize a new set that will hold our characters
  let set = new Set();
  // set up our window pointers
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  // while our right pointer hasn't reached the end of the string
  while (right < s.length) {
    // if our set does not have the character at our right pointer
    if (!set.has(s.charAt(right))) {
      // add the character to the set
      set.add(s.charAt(right));
      // increaes our window moving the right pointer
      right++;
    } else {
      // delete the character at our left pointer which should equal the character at our right pointer from our set
      set.delete(s.charAt(left));
      // shrink the window
      left++;
    }
    // update our max substring length which is the size of our unique characters or the maximum substring length
    maxSubstringLength = Math.max(set.size, maxSubstringLength);
  }

  return maxSubstringLength;
};

// Time: O(N) since we'll traverse all characters through our sliding window
// Space: O(1)

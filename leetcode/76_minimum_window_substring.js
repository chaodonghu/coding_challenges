// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".
//
// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
//
//
//
// Example 1:
//
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:
//
// Input: s = "a", t = "a"
// Output: "a"
//
//
// Constraints:
//
// 1 <= s.length, t.length <= 105
// s and t consist of English letters.
//
//
// Follow up: Could you find an algorithm that runs in O(n) time?

const minWindow = function (s, t) {
  // initialize variables
  let charCount = t.length;
  let minLength = Number.MAX_SAFE_INTEGER;
  let minStartIndex = 0;
  const charMap = {};

  // create a map of the characters of T
  for (let char of t) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  // this sets conditional for 1st pointer
  for (right; right < s.length; ) {
    // if our right pointer is at a character within our character map, decrement our total character count
    if (charMap[s[right]] > 0) {
      charCount--;
    }
    // decrement the value of the character in our map, we'll have NaN values here
    charMap[s[right]]--;
    // increase our right pointer
    right++;

    // this sets conditional for 2nd pointer
    // once we have found a window where all the character count exists
    while (charCount === 0) {
      // check if current window is less than the minimum length
      if (right - left < minLength) {
        minLength = right - left;
        // our min start index is where our left pointer is
        minStartIndex = left;
      }

      // we increase all the character maps of the left pointer (NaN are not incremented)
      charMap[s[left]]++;
      // once we find our new window where have atleast a character in t then start our new window
      if (charMap[s[left]] > 0) charCount++;
      // increase the left pointer at every step
      left++;
    }
  }

  // return empty string if no valid candidate
  // otherwise return smallest substring
  return minLength === Number.MAX_SAFE_INTEGER
    ? ""
    : s.substr(minStartIndex, minLength);
};

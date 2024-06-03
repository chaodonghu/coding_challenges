/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let first = 0;
  let longestPrefix = 0;

  // While we haven't reached the end of any of the strings
  while (first < s.length && longestPrefix < t.length) {
    // if the first occurance of a character in t appears in s, then increment the longestPrefix counter
    if (s[first] === t[longestPrefix]) {
      longestPrefix++;
    }
    // always increase the first pointer
    first++;
  }

  // The number of characters that need to be added is the difference between the total # of characters in t minus the # of characters in t that appear in s
  return Math.abs(t.length - longestPrefix);

  // longest prefix is a subsequence of s
};

// Time: O(N)
// Space: O(1)

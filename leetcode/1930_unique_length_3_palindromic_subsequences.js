/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let answer = 0;
  // this set contains the unique characters in the string
  const unique = new Set(s);

  console.log("unique", unique);

  for (const char of unique) {
    // find the first and last index of the character
    const start = s.indexOf(char);
    const end = s.lastIndexOf(char);

    // if there is a valid range, the first occurence of the character is less than the last occurence of the character
    if (start < end) {
      // the # of unique characters in between the first and last occurences of the character in the string
      answer += new Set(s.slice(start + 1, end)).size;
    }
  }

  return answer;
};

// Time: O(N)
// Space: O(1) -> unique will contain at most 26 letters/characters

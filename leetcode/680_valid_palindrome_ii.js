/**
 * @param {string} s
 * @param {number} p1
 * @param {number} p2
 * @return {boolean}
 */
const isTruePalindrome = function (s, p1, p2) {
  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;
    p1++;
    p2--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    // if the pointers do not match then increment either the first pointer and see if it's a palindrome
    // else decrement the second pointer and see if it's a valid palindrome
    if (s[p1] !== s[p2])
      return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1);
    // if the pointers equal then shrink the pointers
    p1++;
    p2--;
  }

  return true;
};

// Time: O(N)
// Space: O(1)

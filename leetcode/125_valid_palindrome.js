/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // remove spaces, any non alphanumeric characters, lowercase all characters
  s = s
    .replace(/[^0-9a-z]/gi, "")
    .trim()
    .toLowerCase();

  // have two pointers, one at beginning another at the end
  let start = 0;
  let end = s.length - 1;

  // while the start is less than or equal to the end
  while (start <= end) {
    // if the two characters do not match then we dont have a palidrome
    if (s[start] !== s[end]) {
      return false;
    } else {
      // increment the start pointer
      start++;
      // decrement the end pointer
      end--;
    }
  }

  // once the start does not equal the end then the two pointers have crossed
  return true;
};

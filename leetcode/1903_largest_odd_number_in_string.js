/**
 * @param {string} num
 * @return {string}
 */

var largestOddNumber = function (num) {
  // a number is odd if the right most digit is an odd digit
  // start from the right most digit if it is odd then return the substring from the start of the string to the current index.
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }

  return "";
};

// Time: O(N)
// Space: O(1)

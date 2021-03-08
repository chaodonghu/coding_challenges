// Given a string num which represents an integer, return true if num is a strobogrammatic number.
//
// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
//
//
//
// Example 1:
//
// Input: num = "69"
// Output: true
// Example 2:
//
// Input: num = "88"
// Output: true
// Example 3:
//
// Input: num = "962"
// Output: false
// Example 4:
//
// Input: num = "1"
// Output: true
//
//
// Constraints:
//
// 1 <= num.length <= 50
// num consists of only digits.
// num does not contain any leading zeros except for zero itself.

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  // have a map of all the strobogrammtic numbers from 1 to 9
  let map = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  // have two pointers start at both sides of the num
  let start = 0;
  let end = num.length - 1;

  while (start <= end) {
    // if our number is not in our map then there is no way it can be strobogrammtic
    if (!map[num[start]]) return false;
    // if our mapping of the start character is not equal to the end character that means the entire string is not strobogrammatic
    if (map[num[start]].toString() !== num[end].toString()) {
      return false;
    }
    start++;
    end--;
  }
  // return true once we have gone through the entire num
  return true;
};
// Time: O(N)
// Space: O(!)

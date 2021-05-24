/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  // create a map of uppercase characters to match the lowercase characterss
  let map = new Map();
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 26; i++) {
    map.set(upper[i], lower[i]);
  }

  let string = "";

  // loop through our string, if our map has the upper case character then get the lowercase value, else just add the character
  for (let char of s) {
    string += map.has(char) ? map.get(char) : char;
  }

  return string;
};

// The intuition is we can't do a ASCII conversion here and check if the character codes are greater than 97 since we can incldue
// non alphabetic characters like ~ or ~

// Time: O(N) since we loop through the length of the string
// Space: O(N) since we store a string the size of the length of the string

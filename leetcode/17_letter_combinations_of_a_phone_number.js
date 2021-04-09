// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
//
//
//
//
// Example 1:
//
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
//
// Input: digits = ""
// Output: []
// Example 3:
//
// Input: digits = "2"
// Output: ["a","b","c"]
//
//
// Constraints:
//
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [];

  if (digits.length === 0) return res;
  // generate a map of the numbers along with their values
  let map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  // make combination
  var makeCombination = (i, s) => {
    // if our index equals our digits length then we have completed a combination
    if (i === digits.length) {
      res.push(s);
      return;
    }

    // go through all the possible letter values of the current digits
    for (let c of map[digits[i]]) {
      // increase our index by one and add the letter to the string we are building
      makeCombination(i + 1, s + c);
    }
  };

  makeCombination(0, "");
  return res;
};

// Time: O(N ^ 4) since we go through all the digits and at most we can have 4 letters representing each digit
// Space: O(N ^ 4)

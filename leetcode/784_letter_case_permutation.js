// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
//
// Return a list of all possible strings we could create. You can return the output in any order.
//
//
//
// Example 1:
//
// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:
//
// Input: S = "3z4"
// Output: ["3z4","3Z4"]
// Example 3:
//
// Input: S = "12345"
// Output: ["12345"]
// Example 4:
//
// Input: S = "0"
// Output: ["0"]
//
//
// Constraints:
//
// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let output = [""];

  for (char of S) {
    let temp = [];
    // check if the character is in the alphabet
    if (char.toLowerCase() !== char.toUpperCase()) {
      // for every output then push to the temp array a variation of the output plus the uppercase character and the lower case character
      for (let o of output) {
        temp.push(`${o}${char.toUpperCase()}`);
        temp.push(`${o}${char.toLowerCase()}`);
      }
    } else {
      // it is a number, so just push the character
      for (let o of output) {
        temp.push(`${o}${char}`);
      }
    }
    // make the output the new temp
    output = temp;
  }

  return output;
};

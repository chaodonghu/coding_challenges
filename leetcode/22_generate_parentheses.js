// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
//
//
// Example 1:
//
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
//
// Input: n = 1
// Output: ["()"]
//
//
// Constraints:
//
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  const generateSolution = (leftCount, rightCount, tempString) => {
    // if the left number of parentheses is greater then the remaining right number of parentheses then exit
    if (leftCount > rightCount) return;
    // once we reach 0 push into our result array
    if (!leftCount && !rightCount) result.push(tempString);

    // decrement the left count and add an opening bracket
    if (leftCount > 0) {
      generateSolution(leftCount - 1, rightCount, `${tempString}(`);
    }
    // decrement the right count and add a closing bracket
    if (rightCount > 0) {
      generateSolution(leftCount, rightCount - 1, `${tempString})`);
    }
  };

  // we know that we have to have an equal amount of left count and right count parentheses
  generateSolution(n, n, "");

  return result;
};

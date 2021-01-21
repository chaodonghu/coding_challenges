// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // initiate stack
  const stack = [];

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (el of s) {
    // if character is an open bracket
    if (map[el]) {
      // push the complement into our stack
      stack.push(map[el]);
      // skip to next iteration
      continue;
    }

    // if the element is not that last closing bracket in our stack then it is not balanced
    if (el !== stack.pop()) {
      return false;
    }
  }

  // once were done through the string then return if the stack is empty
  return stack.length === 0;
};

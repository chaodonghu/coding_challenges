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
const map = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isValid = (s) => {
  // initiate stack
  const stack = [];

  // loop through string
  for (let i = 0; i < s.length; i++) {
    // get the current element
    const el = s[i];

    // if the parentheses' complement is in our map
    if (map[el]) {
      // then push the complement into the stack
      stack.push(map[el]);
    } else {
      // the element is not an opening bracket but a closing bracket
      // if the element is not the last element on our stack then return false
      if (el !== stack.pop()) {
        return false;
      }
    }
  }

  // once were done through the string then return if the stack is empty
  return stack.length === 0;
};

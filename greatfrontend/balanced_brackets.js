/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  // setup mapping that matches closed brackets to their open complement
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];
  // loop through the string

  for (let char of str) {
    // follow LIFO principle
    // if it's a closing bracket
    if (mapping[char]) {
      // if our stack is present, pop off top element of the stack, or just a placeholder ('#')
      const topElement = stack.length ? stack.pop() : "#";

      // if our topElement does not match our complement for the closed bracket then we don't have a balanced bracket
      if (topElement !== mapping[char]) {
        return false;
      }
    } else {
      // we have an open bracket, so build our stack
      stack.push(char);
    }
  }

  // at the end we should have nothing in our stack since all the open brackets should be cleared and balanced
  return stack.length === 0;
}

// Time: O(N)
// Space: O(N), where in the worse case all the openin brackets are stored in the stack

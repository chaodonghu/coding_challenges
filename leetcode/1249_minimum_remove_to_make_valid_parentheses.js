/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  s = s.split("");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // if character is an opening bracket push the index of that opening bracket to the stack
    if (s[i] === "(") stack.push(i);
    // if the character is a closing bracket
    else if (s[i] === ")") {
      // pop off the latest index in our stack since it matches
      if (stack.length) {
        stack.pop();
      } else {
        // if we dont have anything in our stack then delete the closing bracket
        s[i] = "";
      }
    }
  }

  // for whatever we have remaining in our stack, delete the indexes of these opening brackets
  for (i of stack) s[i] = "";

  // join our string back together
  return s.join("");
};

// Time Complexity: O(N) -> Go through our string once, then potentially have to go through it again if we have all opening brackets in our stack
// Space Complexity: O(N)

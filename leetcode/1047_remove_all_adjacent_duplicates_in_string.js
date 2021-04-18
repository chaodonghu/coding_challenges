/**
 * @param {string} S
 * @return {string}
 */

// Iterating over the string and mutating it
var removeDuplicates = function (S) {
  S = S.split("");

  let length = -1;

  while (length !== S.length) {
    length = S.length;

    for (let i = 0; i < S.length; i++) {
      if (S[i] === S[i - 1]) {
        S.splice(i - 2 + 1, 2);
        break;
      }
    }
  }

  return S.join("");
};

// Utilizing a stack
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let stack = [S.charAt(0)];

  for (let i = 1; i < S.length; i++) {
    if (stack[stack.length - 1] === S.charAt(i)) {
      stack.pop();
    } else {
      stack.push(S.charAt(i));
    }
  }

  return stack.join("");
};

// Time: O(N) since we loop through the string once and add to our stack
// Space: O(N) at worst case, we add all the characters into our stack

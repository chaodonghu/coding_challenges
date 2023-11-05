/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let pointer = 0;
  let stack = [];

  for (num of target) {
    // if the number/pointer does not exist in the target then we push and then pop it
    while (pointer < num - 1) {
      stack.push("Push");
      stack.push("Pop");
      pointer++;
    }

    // push the number into the stack, increment our pointer
    stack.push("Push");
    pointer++;
  }

  return stack;
};

// Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.
//
//
//
// Example 1:
//
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:
//
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.
//
//
// Constraints:
//
// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed is a permutation of popped.
// pushed and popped have distinct values.

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let j = 0;

  for (let el of pushed) {
    // push each value of the pushed array to the stack
    stack.push(el);

    // greedly pop values from the stack if they are the next values to the pop
    // if we have a stack, if the j (popped pointer is less than the popped length)
    // if the last element on the stack equals the element we have to pop
    // then pop off of our stack and increase the stack pointer
    while (
      stack.length &&
      j < popped.length &&
      stack[stack.length - 1] === popped[j]
    ) {
      stack.pop();
      j++;
    }
  }

  // if our popped pointer equals the popped length that means we have sucessfully pushed and popped all the elements
  return j === popped.length;
};

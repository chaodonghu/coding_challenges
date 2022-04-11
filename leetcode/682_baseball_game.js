// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
//
// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
//
// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.
//
//
//
// Example 1:
//
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:
//
// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:
//
// Input: ops = ["1"]
// Output: 1
//
//
// Constraints:
//
// 1 <= ops.length <= 1000
// ops[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
// For operation "+", there will always be at least two previous scores on the record.
// For operations "C" and "D", there will always be at least one previous score on the record.

var calPoints = function (ops) {
  // we can utilize a stack structure to store our result after each operation in block
  let stack = [];

  // loop through our operations (ops)
  for (let operation of ops) {
    // store the stack's length in a variable (N) for access
    let N = stack.length;

    // (1) if the operation is actually an integer an operation then parse the string into an integer
    if (parseInt(operation)) {
      stack.push(parseInt(operation));
      // (2) if the operation is "D" then double the last score (last element in our stack)
      // take into account that if we encouter a 'D' and the stack does not have an element yet then push 0
    } else if (operation === "D") {
      stack.push(2 * (stack[N - 1] || 0));
      // (3) if the operation is "+" then sum our last two scores (second last and last element in our stack)
      // take into account that if we encounter a "+" and the stack does not have atleast two elements then we default that null value to 0
    } else if (operation === "+") {
      stack.push((stack[N - 2] || 0) + (stack[N - 1] || 0));
    }
    // (3) if the operation is "C" then remove the last score then pop that off of our stack
    else if (operation === "C") {
      stack.pop();
    }
  }

  // return the addition of our entire stack
  return stack.reduce((a, b) => a + b, 0);
};
// Time -> O(N) -> N is the length of the operations. We must go through all of the ops/operations
// Space -> O(N) -> Since we can receive an input of all integers, the space of our stack could be N length

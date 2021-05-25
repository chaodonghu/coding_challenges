/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const evaluate = (x, y, operator) => {
    switch (operator) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return Math.trunc(x / y);
    }
  };

  // create a stack to store operands
  let stack = [];

  let map = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
  };

  for (let token of tokens) {
    // if our token is a operator
    if (map[token]) {
      // evaluate the last two operands on top of our stack
      let lastOperand = stack.pop();
      let secondLastOperand = stack.pop();

      // push our evaluation of the two operands into our stack
      stack.push(evaluate(secondLastOperand, lastOperand, token));
    } else {
      // if our token is a operand then push the number into our stack
      stack.push(Number(token));
    }
  }

  // return our last element on the stack
  return stack.pop();
};

// Time: O(N) N being the number of tokens in our token array
// Space: O(D) where D will represent the number of operands in our tokens array, we will never store operators

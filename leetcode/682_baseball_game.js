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

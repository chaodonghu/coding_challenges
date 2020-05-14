/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  let removed = 0;
  for (let n of num) {
    while (stack && n < stack[stack.length - 1] && k > removed) {
      stack.pop();
      removed += 1;
    }
    stack.push(n);
  }

  // remove all remaining large numbers
  while (k > removed) {
    stack.pop();
    removed += 1;
  }

  // remove all beginning zeroes
  while (stack && stack[0] === "0") {
    stack.shift();
  }

  return stack ? stack.join("") : "0";
};

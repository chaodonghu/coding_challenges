/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const dangling_open_parens = [];
  const dangling_closed_parens = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (c === "(") {
      dangling_open_parens.push(i);
    } else if (c === ")") {
      if (dangling_open_parens.length > 0) {
        dangling_open_parens.pop();
      } else {
        dangling_closed_parens.push(i);
      }
    }
  }

  let balanced_str = "";

  for (let i = 0; i < s.length; i++) {
    if (
      !dangling_open_parens.includes(i) &&
      !dangling_closed_parens.includes(i)
    ) {
      balanced_str += s.charAt(i);
    }
  }

  return balanced_str;
};

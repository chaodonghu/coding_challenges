/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  return helper(n, n);
};

var helper = function (n, m) {
  if (n == 0) return [""];
  // if the strobogrammatric number length is 1
  if (n == 1) return ["0", "1", "8"];

  // call the helper recursively, decreasing the n since we will add two characters
  var list = helper(n - 2, m);

  var res = [];

  for (let result of list) {
    // if m is not equal to n then add 0's, we can't add 0's on the first iteration since "00" is not a number
    if (m !== n) res.push("0" + result + "0");

    res.push("1" + result + "1");
    res.push("6" + result + "9");
    res.push("8" + result + "8");
    res.push("9" + result + "6");
  }

  return res;
};

// Time: O(N^2)

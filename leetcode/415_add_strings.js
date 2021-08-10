/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num2.length > num1.length) return addStrings(num2, num1);

  // start a pointer at each end of the num1 and num2 strings
  let i = num1.length - 1;
  let j = num2.length - 1;
  let out = "";
  let carry = 0;

  // while the num1 pointer is greater or equal to 0
  while (i >= 0) {
    // get the character at the first pointer
    const digit1 = num1.charAt(i) - "0";
    // get the character at the second pointer
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";

    // add both digits up and the carry
    let sum = carry + digit1 + digit2;
    // reset the carry
    carry = 0;

    if (sum > 9) {
      // carry will now be 1
      carry = 1;
      // modulo the sum
      sum %= 10;
    }

    out = `${sum.toString()}${out}`;
    i -= 1;
    j -= 1;
  }

  if (carry > 0) out = `${carry.toString()}${out}`;

  return out;
};

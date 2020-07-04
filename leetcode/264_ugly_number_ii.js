/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
  let output = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  while (output.length < n) {
    let lastElement = output[output.length - 1];
    while (output[i2] * 2 <= lastElement) {
      i2 += 1;
    }
    while (output[i3] * 3 <= lastElement) {
      i3 += 1;
    }
    while (output[i5] * 5 <= lastElement) {
      i5 += 1;
    }

    output.push(Math.min(output[i2] * 2, output[i3] * 3, output[i5] * 5));
  }
  return output[output.length - 1];
};

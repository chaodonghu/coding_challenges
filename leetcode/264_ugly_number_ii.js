/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
  // We need to build up an array with ugly numbers till we reach n-1
  // So we will iterate multiples of 2,3,5 and record them.
  // But, if just store 2,3,5 - 4,6,10 - 6,9,15 etc we'd be going out of order
  // So we need to increase the indeces for 2,3,5 periodically according to the minimum multiple

  // we will fill this output with our ugly multiples
  let output = [1];
  // we will periodically increment these i2, i3 and i5 indices
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  while (output.length < n) {
    let lastElement = output[output.length - 1];
    // if the multiple is less than or equal to our latest output element then increase the index
    // (eg. index 2 will increase, then the next round output[i2] * 2 will be 4, therefore output[i3] * 3 will be the lowest (1 * 3 = 3))
    while (output[i2] * 2 <= lastElement) {
      i2 += 1;
    }
    while (output[i3] * 3 <= lastElement) {
      i3 += 1;
    }
    while (output[i5] * 5 <= lastElement) {
      i5 += 1;
    }

    // we will pick the lowest multiple and then record that number in our output array and increment the indices
    output.push(Math.min(output[i2] * 2, output[i3] * 3, output[i5] * 5));
  }

  // return the last element of our output array
  return output[output.length - 1];
};

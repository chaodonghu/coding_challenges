/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let max = "";

  // start at the 3rd character
  for (let i = 2; i < num.length; i++) {
    // if the current character equals the previous character and the next character
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      // create the substring
      const subString = num[i].repeat(3);

      // check if the substring is greater than the max
      if (subString > max) {
        max = subString;
      }
    }
  }
  return max;
};

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  function shiftLetter(letter, shiftAmount) {
    // Get the character code of the letter
    let code = letter.charCodeAt(0);

    // Determine the base code for 'a' or 'A' depending on whether the letter is lowercase or uppercase
    let baseCode =
      letter >= "a" && letter <= "z" ? "a".charCodeAt(0) : "A".charCodeAt(0);

    // Shift the letter
    let shiftedCode = ((code - baseCode + shiftAmount + 26) % 26) + baseCode;

    // Return the shifted letter
    return String.fromCharCode(shiftedCode);
  }

  let stringArray = s.split("");
  for (let [start, end, direction] of shifts) {
    for (let i = start; i <= end; i++) {
      stringArray[i] = shiftLetter(stringArray[i], direction == 1 ? 1 : -1);
    }
  }

  return stringArray.join("");
};

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  // the current index our finger is on, on the keyboard
  let currentIndex = 0;
  let map = {};
  let total = 0;

  // generate our map and where the keys are
  for (let i = 0; i < keyboard.length; i++) {
    let char = keyboard[i];
    map[char] = i;
  }

  // go through our word
  for (let char of word) {
    // our total time is the character's index minus the current index we are on
    total += Math.abs(map[char] - currentIndex);
    // update the current index to be the character we just pressed
    currentIndex = map[char];
  }

  // return the total time
  return total;
};

// Time: O(N)
// Space: O(1) since we will store a map of 26 letters

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let map = {};

  // store the character frequencies in a dictionary
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  // create a set to store our used frequencies
  let usedFreq = new Set();
  let deletions = 0;

  // loop through our character frequencies
  for (let charFreq of Object.values(map)) {
    // while the character frequency is greater than 0 and we already have that frequency within our set, delete the character and decrement the character frequency
    while (charFreq > 0 && usedFreq.has(charFreq)) {
      deletions++;
      charFreq--;
    }

    // if the character frequency is unique and greater than 0 then add it to our set
    if (charFreq > 0) {
      usedFreq.add(charFreq);
    }
  }

  // return the # of deletions we have to make
  return deletions;
};

// Time: O(N) since we need to traverse the entire string
// Space: O(N) since we create a map to store the frequencies of each character and then a set to store unique frequencies which we will add to
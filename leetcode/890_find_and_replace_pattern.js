/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let matches = [];

  for (let word of words) {
    if (word.length !== pattern.length) continue;

    // instantiate 3 variables for every word
    let equals = true;
    let set = new Set();
    let map = new Map();

    // go through our pattern
    for (let i = 0; i < pattern.length; i++) {
      let wordChar = word[i];
      let patternChar = pattern[i];

      // if we already visited a pattern character that maps to the current's word character
      if (map.has(patternChar)) {
        // if the pattern's character letter which is the word character does not equal the word character index;
        if (map.get(patternChar) !== wordChar) {
          console.log('falsey')
          // we set equals to false and break from the loop
          equals = false;
          break;
        }
      } else {
        // we haven't visited this pattern character
        // if our set has our word character but it isn't in the pattern then set equals to false
        if (set.has(wordChar)) {
          equals = false;
          break;
        }

        // set our pattern character and it's key to be the word character
        map.set(patternChar, wordChar);
        // add to our set the word character
        set.add(wordChar);
      }
    }
    if (equals) matches.push(word);
  }
  return matches;
};

// Time: O(N * M)
// Space: O(N * M) with M being the characters of the longest word and N being the number of words

// The hashmap at most will be 26 characters thus will be constant space

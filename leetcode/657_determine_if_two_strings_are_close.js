/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // if the strings length is not equal then return false
  if (word1.length !== word2.length) return false;

  // make a map of each word
  var makeMap = function (word) {
    let map = {};
    word.split("").forEach((char) => {
      map[char] = (map[char] || 0) + 1;
    });
    return map;
  };

  let word1Map = makeMap(word1);
  let word2Map = makeMap(word2);

  // make the word1Map a set to enable .has function
  let word1Keys = new Set(Object.keys(word1Map));

  // go through the keys of both objects, both objects/maps should have the same keys
  for (let key of Object.keys(word2Map)) {
    if (!word1Keys.has(key)) return false;
  }

  // go through all the values of all the keys
  let word1Val = Object.values(word1Map).sort((a, b) => a - b);
  let word2Val = Object.values(word2Map).sort((a, b) => a - b);

  // if both words have the same frequencies then return true
  return word1Val.toString() == word2Val.toString();
};

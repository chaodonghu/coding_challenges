// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.
//
// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]
//
// Output:
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]
//
// Output:
// "a"
// Note:
// All the strings in the input will only contain lower-case letters.
// The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  // sort by length first then lexical ordering
  d.sort((a, b) => {
    if (a.length != b.length) return b.length - a.length;
    return a.localeCompare(b);
  });

  // loop through the words, the longest word will be first then the smallest lexicographical order
  for (let word of d) {
    let index = -1;
    for (let c of word) {
      // update the index based on if we find the character
      // index will keep increasing unless the character is not found in the string
      index = s.indexOf(c, index + 1);
      if (index < 0) break;
    }

    // after we loop through the word, check if the current index is greater or equal to 0
    // this means we have the index of the character of the last letter of the word we are on in the string
    if (index >= 0) return word;
  }

  return "";
};

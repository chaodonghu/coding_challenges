// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
//
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
//
//
//
// Example 1:
//
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:
//
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:
//
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
//
//
// Constraints:
//
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// use the Array.sort() property which does the internal comparison of compare(a, b)
// 0 -> a is equal to b
// -1 -> a should be BEFORE b in the final result
// 1 -> a should be AFTER b in the final result
var isAlienSorted = function (words, order) {
  // build our alphabet order by looping through the order string
  let alphabet = new Map();
  let index = 0;

  for (let letter of order) {
    alphabet.set(letter, index);
    index++;
  }

  for (let i = 0; i < words.length - 1; i++) {
    // loop through all the words and compare adjacent words
    // return false if we return 1, which means that a should be AFTER b
    if (compare(words[i], words[i + 1], alphabet) === 1) {
      return false;
    }
  }

  // we looped through all the values and all a's should be before b meaning they are in lexigraphical order
  return true;
};

var compare = function (a, b, alphabet) {
  let aLength = a.length;
  let bLength = b.length;
  // get the minimum length between the two words and loop through the smaller string
  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    const aOrder = alphabet.get(a[i]);
    const bOrder = alphabet.get(b[i]);

    // if both letters are equal, keep looping through both strings
    if (aOrder === bOrder) {
      continue;
    }

    // if the aOrder is less than the bOrder at the current character that means we are in sorted lexicographical order, a should become before b therefore return -1
    if (aOrder < bOrder) {
      return -1;
    }

    // this means that bOrder is greater than aOrder, therefore the string at b should be before a
    return 1;
  }

  // if we looped through the string and both strings are equal/the same
  if (aLength === bLength) {
    return 0;
  }

  // there is case where the bLength is greater than the aLength for example (apple and app), in this case, we are not in sorted lexicographical order after all our checks above
  return aLength < bLength ? -1 : 1;
};

// Time: O(M) with M being the number of characters in words, N is a fixed length of 26
// Space: O(1) the extra data structure that we use is a hash map that stores a fixed set of 26 characters and their index

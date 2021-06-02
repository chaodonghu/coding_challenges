// Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
//
// Return list of lists of the suggested products after each character of searchWord is typed.
//
//
//
// Example 1:
//
// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
// Example 2:
//
// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// Example 3:
//
// Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
// Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
// Example 4:
//
// Input: products = ["havana"], searchWord = "tatiana"
// Output: [[],[],[],[],[],[],[]]
//
//
// Constraints:
//
// 1 <= products.length <= 1000
// There are no repeated elements in products.
// 1 <= Σ products[i].length <= 2 * 10^4
// All characters of products[i] are lower-case English letters.
// 1 <= searchWord.length <= 1000
// All characters of searchWord are lower-case English letters.
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  let Trie = {};

  // sort the products lexicographically
  products.sort((a, b) => a.localeCompare(b));

  // build the trie
  for (let product of products) {
    let current = Trie;

    for (let char of product) {
      if (!current[char]) {
        current[char] = {};
      }

      // make the current the character
      current = current[char];
      // add each product to the character
      current.suggestion = (current.suggestion || []).concat(product);
      // sort the suggestions lexicographically
      current.suggestion.sort((a, b) => a.localeCompare(b));

      if (current.suggestion.length > 3) {
        current.suggestion.pop();
      }
    }
    current.isWord = true;
  }

  let results = [];
  let current = Trie;

  for (let char of searchWord) {
    if (current) {
      current = current[char];
    }

    results.push(current ? current.suggestion : []);
  }

  return results;
};

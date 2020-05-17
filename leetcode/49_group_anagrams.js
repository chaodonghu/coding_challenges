// Given an array of strings, group anagrams together.
//
// Example:
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:
//
// All inputs will be in lowercase.
// The order of your output does not matter.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dictionary = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split('').sort().join('');
        if (!dictionary[sortedWord]) {
            dictionary[sortedWord] = [strs[i]]
        } else {
            dictionary[sortedWord] = [...dictionary[sortedWord], strs[i]]
        }
    }

    const array = [];

    for (let key in dictionary) {
        array.push(dictionary[key]);
    }

    return array;
};

// Time complexity: O(N K log K), where N is the length of the strs, and K is the maximum length of the string in strs.
// The outer loop has a complexity of O(N) as we iterate through each string, Sorting each string takes O (K log K)
// Space complexity: O(N K), the total information stored in the dictionary

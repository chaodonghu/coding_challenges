// Given a string, sort it in decreasing order based on the frequency of characters.
//
// Example 1:
//
// Input:
// "tree"
//
// Output:
// "eert"
//
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:
//
// Input:
// "cccaaa"
//
// Output:
// "cccaaa"
//
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:
//
// Input:
// "Aabb"
//
// Output:
// "bbAa"
//
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {}
    let string = s.split('')
    let result = '';

    for (char of string) {
        hash[char] ? hash[char]++ : (hash[char] = 1);
    }

    const sortedArr = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

    sortedArr.forEach((v) => {
        for (let i = 0; i < hash[v]; i++) {
            result += v
        }
    });

    return result;
};

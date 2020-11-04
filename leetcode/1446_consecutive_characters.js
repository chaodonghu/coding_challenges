// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.
//
// Return the power of the string.
//
//
//
// Example 1:
//
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:
//
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:
//
// Input: s = "triplepillooooow"
// Output: 5
// Example 4:
//
// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:
//
// Input: s = "tourist"
// Output: 1
//
//
// Constraints:
//
// 1 <= s.length <= 500
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let powerCount = 1;
    let max = 1;

    for(let i=1; i<s.length; i++){
        const prevChar = s[i-1];
        const currChar = s[i];

        if(currChar === prevChar){
            // increase power point
            powerCount++;
            // increment the max as the global max or current power count
            max = Math.max(max, powerCount);
        } else {
            // if they dont equal then reset current power count
            powerCount = 1;
        }
    }
    return max;
};

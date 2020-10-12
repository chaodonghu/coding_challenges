// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
//
// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
//
//
//
// Example 1:
//
// Input: s = "bcabc"
// Output: "abc"
// Example 2:
//
// Input: s = "cbacdcbc"
// Output: "acdb"
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s consists of lowercase English letters.

const removeDuplicateLetters = s => {
    const n = s.length;
    if (n < 2) return s;                       //Blank or single letter-string
    const count = Array(26).fill(0);           //Counting all letters in s by index 0-25 -- tracks how many of each are remaining when building new string
    const used = Array(26);                    //Record which letters have been used when building the new string

    for (let i = 0; i < n; i++)                //Count all letters in s by ASCII code offset from a's code = 97
        count[s.charCodeAt(i) - 97]++;

    const res = [];                            //Array of letters representing the new string
    for (let i = 0; i < n; i++) {
        const letter = s.charCodeAt(i) - 97;   //Iterating over all letters in string, reduce count
        count[letter]--;
        if (!used[letter]) {    //If letter is currently used in res, while the letter at the end of res is lexicographically after the current letter and the count record indicates that last character will be encountered later in the string, toggle the last letter to being unused and pop it from the string
            while ( res.length > 0 && res[res.length - 1].charCodeAt(0) - 97 > letter && count[res[res.length - 1].charCodeAt(0) - 97] > 0 ) {
                used[res[res.length - 1].charCodeAt(0) - 97] = false;
                res.pop();
            }
            res.push(s[i]);     //Add the current letter now that the lexicographically succeeding letters (which are present later in the string s) have been removed
        }
        used[letter] = true;    //Set the current letter's used value to true
    }
    return res.join('');        //Return the built new string
};

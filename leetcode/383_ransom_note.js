// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineLetters = {};

    for (const letter of magazine) {
        if (magazineLetters[letter]) {
            magazineLetters[letter] = magazineLetters[letter] + 1;
        } else {
            magazineLetters[letter] = 1;
        }
    }

    for (const ransomLetter of ransomNote) {
        if (magazineLetters[ransomLetter] && magazineLetters[ransomLetter] > 0) {
            magazineLetters[ransomLetter] = magazineLetters[ransomLetter] - 1;
        } else {
            return false;
        }
    }

    return true;
};

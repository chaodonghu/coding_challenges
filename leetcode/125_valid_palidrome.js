// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
//
//
// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//
//
// Constraints:
//
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function(s) {
    if (s === "") {
        return true;
    }

    // 1. Remove non-alphanumeric chars from the string
    const alphanum = s.toLowerCase().replace(/[\W]/g, "");

    let front = 0;
    let back = alphanum.length - 1;

    while (front < back) {
        const frontChar = alphanum[front];
        const backChar = alphanum[back];
        if (frontChar != backChar) {
            return false;
        }
        front++;
        back--;
    }

    return true;
};

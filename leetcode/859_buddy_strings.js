// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.
//
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
//
//
//
// Example 1:
//
// Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
// Example 2:
//
// Input: A = "ab", B = "ab"
// Output: false
// Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
// Example 3:
//
// Input: A = "aa", B = "aa"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
// Example 4:
//
// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:
//
// Input: A = "", B = "aa"
// Output: false
//
//
// Constraints:
//
// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist of lowercase letters.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    const diff = [];

    for (let i = 0; i < A.length; i++) {
        // if the current element index in A is not equal to the current element index in B
        if (A[i] != B[i]) diff.push(i);
        // if there are more than two differences then return false
        if (diff.length > 2) return false;
    }

    // if there is no differences then return result of
    // if A.length is not equal to the unique of A
    if (!diff.length) return A.length != [...new Set(A)].length;

    // get the first and second indexes in diff array (should be no more than 2 differences of indexes
    const [i, j] = diff;
    // the swap in the indexes should be equal since they are the only two differences
    return A[i] == B[j] && B[i] == A[j];
};

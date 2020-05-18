// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
//
// Note that after backspacing an empty text, the text will continue empty.
//
// Example 1:
//
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:
//
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:
//
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:
//
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:
//
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:
//
// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} s
 * @return {string}
 */
 // Approach 1:
const process = s => {
    const res = [];
    // split string into an array then loop over the array
    for (x of s.split('')) {
        // if the element is # then remove it from the stack, if not then push it into the stack
        x === '#' ? res.pop() : res.push(x);
    }
    // join back the array to make it a string for comparison
    return res.join('')
}
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 // compare the two now cleaned strings without #
var backspaceCompare = (S, T) => process(S) == process(T);

// Space complexity: O(M + N) where M and N are the lengths of S and T
// Time complexity: O(M + N)


// Approach 2:
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sStack = [];
    let tStack = [];

    for (let s of S) {
        if (s !== '#') {
            sStack.push(s);
        } else {
            sStack.pop();
        }
    }

    for (let t of T) {
        if (t !== '#') {
            tStack.push(t);
        } else {
            tStack.pop();
        }
    }

    console.log('sStack', sStack);

    return sStack.toString() == tStack.toString()
};

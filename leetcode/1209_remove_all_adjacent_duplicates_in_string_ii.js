// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.
//
// We repeatedly make k duplicate removals on s until we no longer can.
//
// Return the final string after all such duplicate removals have been made.
//
// It is guaranteed that the answer is unique.
//
//
//
// Example 1:
//
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:
//
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:
//
// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"
//
//
// Constraints:
//
// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s only contains lower case English letters.

// Brute force iteration
var removeDuplicates = function (s, k) {
  s = s.split("");

  let length = -1;
  // when the length changes, iterate again
  while (length !== s.length) {
    // remember the length of current string
    length = s.length;
    // reset count for each new iteration
    for (let i = 0, count = 1; i < s.length; ++i) {
      // when first or current is not equal to previous
      if (i === 0 || s[i] !== s[i - 1]) {
        // reset count to 1
        count = 1;
        // if the current is the same as previous one
      } else {
        // increase the count
        count++;
        // if the count equals to k
        if (count === k) {
          // delete the last k characters
          s.splice(i - k + 1, k);
          // leave the loop
          break;
        }
      }
    }
  }
  return s.join("");
};

// Memoization of count
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // create an array of size string length, the index maps with the count of that string index
  let counts = new Array(s.length).fill(0);
  s = s.split("");

  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if we are at the first index or if the current char doesn't not equal the previous character
    // then our count at our current index is 1
    if (i === 0 || s[i] !== s[i - 1]) {
      counts[i] = 1;
    } else {
      // the previous and the current character match, therefore the urrent index count is the previous index count plus 1
      counts[i] = counts[i - 1] + 1;
      //
      if (counts[i] === k) {
        // go back k indexes and remove k items
        s.splice(i - k + 1, k);
        // reset the index back to i - k
        i = i - k;
      }
    }
  }

  return s.join("");
};


// Stack
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let stack = [];
  s = s.split("");

  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if we are at the first index or if the current char doesn't not equal the previous character
    // then our count at our current index is 1
    if (i === 0 || s[i] !== s[i - 1]) {
      stack.push([s[i], 1]);
    } else {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1] === k) {
        stack.pop();
        s.splice(i - k + 1, k);
        i = i - k;
      }
    }
  }

  return s.join("");
};

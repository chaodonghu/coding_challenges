// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
//
//
// Example 1:
//
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
//
// Input: s = "God Ding"
// Output: "doG gniD"
//
//
// Constraints:
//
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  let word = "";
  // loop through every character of s
  for (let c of s) {
    // if we reach a whitespace
    if (c === " ") {
      // append the word with the whitespace to our res
      res += word + c;
      // reset our word
      word = "";
    } else {
      // add the character plus the word
      word = c + word;
    }
  }

  // return our res plus our remaining word
  return res + word;
};

// Two pointer solution
/**
 * @param {string} s
 * @return {string}
 */

// reverse function which takes in a word
var reverse = function (word) {
  // 1. Split the word into an array of characters
  word = word.split("");

  // 2. Initialize our two pointers, left and right
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    // 3. Swap the left and right characters with the help of a temp variable
    const temp = word[left];
    word[left] = word[right];
    word[right] = temp;
    // 4. Increment left and decrement right to move towards the middle of the array
    left++;
    right--;
    // 5. Repeat the loop while left < right
  }

  // 6. Join the array and return it as a string
  return word.join("");
};

var reverseWords = function (s) {
  // 1. Split the string into an array of words by whitespace
  s = s.split(" ");

  // 2. Reverse the characters in each individual word
  for (let word = 0; word < s.length; word++) {
    s[word] = reverse(s[word]);
  }

  // 3. Return the recombined string
  return s.join(" ");
};

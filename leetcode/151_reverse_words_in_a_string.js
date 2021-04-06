// Given an input string, reverse the string word by word.
//
// Example 1:
//
// Input: "the sky is blue"
// Output: "blue is sky the"
// Example 2:
//
// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:
//
// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
//
//
// Note:
//
// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
var reverseWords = function (str) {
  // split the string by spaces and filter out non strings
  const array = str.split(" ").filter((string) => string);

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let tempStart = array[start];
    array[start] = array[end];
    array[end] = tempStart;
    start++;
    end--;
  }

  return array.join(" ");
};

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
//
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
//
// For example, the saying and conversion for digit string "3322251":
//
//
// Given a positive integer n, return the nth term of the count-and-say sequence.
//
//
//
// Example 1:
//
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:
//
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
//
//
// Constraints:
//
// 1 <= n <= 30

var countAndSay = function (n) {
  let finalString = "1";

  if (n === 1) {
    return finalString;
  }

  let characterPointer = 0;
  let countPointer = 0;
  let stringInProgress = "";

  while (n > 1) {
    while (countPointer < finalString.length) {
      // will increment the counter pointer until both pointers are not on the same character
      while (
        finalString.charAt(characterPointer) ===
        finalString.charAt(countPointer)
      ) {
        countPointer++;
      }

      // add the number of characters
      stringInProgress += (countPointer - characterPointer).toString();
      // add the actual character we are on
      stringInProgress += finalString.charAt(characterPointer);
      characterPointer = countPointer;
    }
    finalString = stringInProgress;
    stringInProgress = "";
    characterPointer = 0;
    countPointer = 0;
    n--;
  }

  return finalString;
};

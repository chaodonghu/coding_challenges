// On a broken calculator that has a number showing on its display, we can perform two operations:
//
// Double: Multiply the number on the display by 2, or;
// Decrement: Subtract 1 from the number on the display.
// Initially, the calculator is displaying the number X.
//
// Return the minimum number of operations needed to display the number Y.
//
//
//
// Example 1:
//
// Input: X = 2, Y = 3
// Output: 2
// Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
// Example 2:
//
// Input: X = 5, Y = 8
// Output: 2
// Explanation: Use decrement and then double {5 -> 4 -> 8}.
// Example 3:
//
// Input: X = 3, Y = 10
// Output: 3
// Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.
// Example 4:
//
// Input: X = 1024, Y = 1
// Output: 1023
// Explanation: Use decrement operations 1023 times.
//
//
// Note:
//
// 1 <= X <= 10^9
// 1 <= Y <= 10^9


/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  let answer = 0;

  while (Y > X) {
    answer += 1;
    // if y is odd then add 1
    if (Y % 2) {
      Y += 1;
    } else {
      // Y is even divide it by two
      Y = Y / 2;
    }
  }

  // after we need to do X - Y additions
  return answer + X - Y;
};

// If say Y is even, then if we perform 2 additions and one division, we could instead perform one division and one addition for less operations [(Y+2) / 2 vs Y/2 + 1].
// If say Y is odd, then if we perform 3 additions and one division, we could instead perform 1 addition, 1 division, and 1 addition for less operations [(Y+3) / 2 vs (Y+1) / 2 + 1].

// we turn Y from odd to even or from even to odd

// Time Complexity: O(log Y)
// Space Complexity: O(1)

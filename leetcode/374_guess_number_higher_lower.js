// We are playing the Guess Game. The game is as follows:
//
// I pick a number from 1 to n. You have to guess which number I picked.
//
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
//
// You call a pre-defined API int guess(int num), which returns three possible results:
//
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let res = guess(mid);

    if (res == 0) {
      return mid;
      // guess is lower than the target
      // then our number should be between the mid and high
    } else if (res == 1) {
      low = mid + 1;
      // guess is higher than the target
      // then our number should be between the low and mid
    } else {
      high = mid - 1;
    }
  }

  return 0;
};

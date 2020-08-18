// Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
//
// Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.
//
// You may return the answer in any order.
//
//
//
// Example 1:
//
// Input: N = 3, K = 7
// Output: [181,292,707,818,929]
// Explanation: Note that 070 is not a valid number, because it has leading zeroes.
// Example 2:
//
// Input: N = 2, K = 1
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
//
//
// Note:
//
// 1 <= N <= 9
// 0 <= K <= 9

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    let prevSet = new Set([0,1,2,3,4,5,6,7,8,9]);

    for (let n = 2; n <= N; n++) { // we start at 2 since n = 1 is just the one digit numbers 0 through 9
        const newSet = new Set();

        for (const prevVal of prevSet) {
            // last digit in our set module 10 gives us the ability to remove hundreds, tens etc.
            const lastDig = prevVal % 10;

            // add K to the last digit
            const plusK = lastDig + K;
            // minus K from the last digit
            const minusK = lastDig - K;

            // if the prevVal is greater than 0 and the addition of K is less than 10 then multiply it by 10
            // take into account that we divided it by 10, and add K
            if (prevVal > 0 && plusK < 10) {
                newSet.add((prevVal * 10) + plusK);
            }
            // if the prevVal is greater than 0 and the substraction of K is greater than or equal to 0 then multiply it by 10
            // take into account that we divided it by 10, and add minus K
            if (prevVal > 0 && minusK >= 0) {
                newSet.add((prevVal * 10) + minusK);
            }
        }

        // set the previous set to our newly built set and run it again
        prevSet = newSet;
    }

    return [...prevSet];
};

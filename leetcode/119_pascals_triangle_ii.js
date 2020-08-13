// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
//
// Note that the row index starts from 0.
//
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
//
// Input: 3
// Output: [1,3,3,1]
// Follow up:
//
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [];

    if (rowIndex < 0) {
        return row;
    }

    row.push(1);

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = row.length - 1; j > 0; j--) {
            row[j] = row[j - 1] + row[j];
        }
        row.push(1);
    }

    return row;
};

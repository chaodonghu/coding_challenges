/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';

    while (columnNumber > 26) {
        let last = columnNumber % 26;
        last === 0 ? last = 26 : 0;
        // add to the result the column number starting from right to left
        // our answer will be in reverse
        result += String.fromCharCode(64 + last);
        // update the colum number
        columnNumber = (columnNumber - last) / 26
    }

    // if our column number is less than 26 than just find the capital character code
    result += String.fromCharCode(64 + columnNumber);
    return result.split('').reverse().join('');
};
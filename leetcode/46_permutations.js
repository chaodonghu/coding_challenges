/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  const combinePermutation = (cur, remainder) => {
    // if our remaining permutations equal to 0 then that means we have built up a permutation, push our current iteration into the result
    if (remainder.length === 0) {
      result.push(cur);
      return;
    }

    // loop through the remainder
    for (let i = 0; i < remainder.length; i++) {
      // call combine permutation with the current array and index of the remainder
      // the remainder passed in should not include the element we just added
      combinePermutation(
        [...cur, remainder[i]],
        [...remainder.slice(0, i), ...remainder.slice(i + 1)]
      );
    }
  };

  combinePermutation([], nums);
  return result;
};

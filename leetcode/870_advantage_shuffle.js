/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
  let result = [];
  // sort our A array in ascending order
  A.sort((a, b) => a - b);

  // loop through evey element in B
  for (let b of B) {
    let max = A[A.length - 1];
    let min = A[0];

    // if the current element in our B is greater than any possible value in A, then utilize our min in A
    if (b >= max) {
      result.push(min);
      A.shift();
    } else {
      let indexToRemove = -1;
      for (let i = 0; i < A.length; i++) {
        if (A[i] > b) {
          result.push(A[i]);
          indexToRemove = i;
          break;
        }
      }
      A.splice(indexToRemove, 1);
    }
  }

  return result;
};

// Time: O(N log N) where N is the number of values in A or B array
// Space: O(N) since we return an array the length of A

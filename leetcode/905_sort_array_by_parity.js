// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
//
// You may return any answer array that satisfies this condition.
//
//
//
// Example 1:
//
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
//
//
// Note:
//
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

/**
 * @param {number[]} A
 * @return {number[]}
 */

// O(N) space
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];

    A.forEach((e) => {
       if (e % 2 === 0) {
           even.push(e);
       } else {
           odd.push(e);
       }
    });

    return [...even, ...odd];
};

// O(!) space
var sortArrayByParity = function (A) {
  let i = 0;
  let j = A.length - 1;

  while (i < j) {
    if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
      let temp = A[i];
      [A[i], A[j]] = [A[j], temp];
    }

    if (A[i] % 2 !== 0) {
      j--;
    }

    if (A[i] % 2 === 0) {
      i++;
    }
  }

  return A;
};

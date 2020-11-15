/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const res = [];
  let i = 0;
  // positive portion of array
  while (A[i] < 0) i++;
  // negative porition of array
  let j = i - 1;

  // go through negative portion of array backwards and positive portion of array forwards
  while (j >= 0 || i < A.length) {
    if (i >= A.length || -A[j] <= A[i]) {
      res.push(A[j--] ** 2);
    } else {
      res.push(A[i++] ** 2);
    }
  }
  return res;
};

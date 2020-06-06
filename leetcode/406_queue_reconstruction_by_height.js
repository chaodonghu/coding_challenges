// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.
//
// Note:
// The number of people is less than 1,100.
//
//
// Example
//
// Input:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
//
// Output:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let res = [];
  // (1) if two elements, a and b, a[0] == b[0], sort by its second array element in ascending order, i.e., , sort by a[1] - b[1]
  // if two elements, a and b, a[0] != b[0], sort by its first array element in descending order, i.e., sort by b[0] - a[0]
  people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
  //  Then for each element in the sorted array, we put it in the result according to its second array element, i.e., a[1], which is the position of its real position in the result array. In JavaScript, splice function is provided.
  people.forEach((val) => {
    // inserts the value ([val[0], val[1]]) at the val[1] position in the array
    res.splice(val[1], 0, val);
  });
  return res;
};

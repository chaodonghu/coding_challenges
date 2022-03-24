/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

// Theory is if the heaviest person can sit with the lightest person then group them together and increment the lightest person pointer, if not then decrement the heaviest person pointer since they will sit on the boat alone
var numRescueBoats = function (people, limit) {
  // sort the weights in increasing order
  people.sort((a, b) => a - b);
  let boats = 0;
  // lightest person pointer
  let i = 0;
  // heaviest person pointer
  let j = people.length - 1;

  // while the lightest person pointer is less than or equal to the heaviest person pointer
  while (i <= j) {
    // increment boat count
    boats++;
    // if both the lightest and heaviest are less than or equal to the limit
    if (people[i] + people[j] <= limit) {
      // increase the lighest person pointer
      i++;
    }
    // always decrement heaviest person pointer as if the addition of the lightest + heaviest is over the limit then just have the heaveist person
    j--;
  }

  return boats;
};

// Time: O(log N)N
// Space: O(N)

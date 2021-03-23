/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  let tuples = 0;
  let seen = {};

  // i is our first pointer
  for (let i = 0; i < arr.length; i++) {
    // j is our second pointer
    for (let j = i + 1; j < arr.length; j++) {
      let total = arr[i] + arr[j];

      // if we have already seen the complement to our total then add this to our tuples count
      if (seen[target - total]) tuples += seen[target - total];
    }

    // after we have looped through the entire array with our head staying the same, add this to our seen map
    seen[arr[i]] = (seen[arr[i]] || 0) + 1;
  }

  return tuples % (Math.pow(10, 9) + 7);
};

// Time: O(N + W^2) with N being the numbers in our array since we iterate through all of them, and W being the max number of times a number appears in the array
// Space; O(W)

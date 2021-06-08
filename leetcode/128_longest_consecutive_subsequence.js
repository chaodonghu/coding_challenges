/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // create a lookup table with the set
  let set = new Set(nums);

  let longestStreak = 0;

  // loop through our nums
  for (let num of nums) {
    // if the set does not have the previous sequence then start our current streak
    if (!set.has(num - 1)) {
      let currentStreak = 1;

      // while the set has our current num + 1
      while (set.has(num + 1)) {
        // incre
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

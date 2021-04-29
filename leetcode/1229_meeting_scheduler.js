// Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.
//
// If there is no common time slot that satisfies the requirements, return an empty array.
//
// The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.
//
// It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.
//
//
//
// Example 1:
//
// Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
// Output: [60,68]
// Example 2:
//
// Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
// Output: []
//
//
// Constraints:
//
// 1 <= slots1.length, slots2.length <= 104
// slots1[i].length, slots2[i].length == 2
// slots1[i][0] < slots1[i][1]
// slots2[i][0] < slots2[i][1]
// 0 <= slots1[i][j], slots2[i][j] <= 109
// 1 <= duration <= 106

/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function (slots1, slots2, duration) {
  // sort the meeting slots by the ascending order in terms of start time
  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 0;

  while (i < slots1.length && j < slots2.length) {
    // have our starts and ends deconstructed
    let [start1, end1] = slots1[i];
    let [start2, end2] = slots2[j];

    // our intersection start will be the max of our starts
    let intersectionStart = Math.max(start1, start2);
    // our intersection end will be the min of the ends
    let intersectionEnd = Math.min(end1, end2);

    // if our intersection start plus the duration fits into our intersection interval
    if (intersectionStart + duration <= intersectionEnd) {
      return [intersectionStart, intersectionStart + duration];
    }
    // if our first end is less than our second end then increase our first pointer, moving through our slots1 list
    else if (end1 < end2) {
      i++;
    }
    // end2 is less than our first end therefore move the second pointer, since the interval in the slots1 is greater
    else {
      j++;
    }
  }

  return [];
};

// Time: O(MlogM + NlogN) since we need to sort then go through all of the intervals/elements in our slots
// Space; O(1)

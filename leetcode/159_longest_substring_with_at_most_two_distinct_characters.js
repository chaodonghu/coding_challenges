/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let isSeens = {};
  let isSeenCount = 0;
  let maxCount = 0;
  let left = 0;
  let right = 0;


  while (right < s.length) {
    let sRight = s[right];

    // if we have already seen the type of s
    if (isSeens[sRight]) {
      isSeens[sRight]++;
    } else {
      // add our s type to the seen map
      isSeens[sRight] = 1;
      // increase seen count
      isSeenCount++;

      // while we have 3 types of ss
      while (isSeenCount > 2) {
        let sLeft = s[left];
        // get rid of the type of s type of our left most pointer
        isSeens[sLeft]--;
        // increase our left pointer
        left++;
        // if our left pointer's s type is now 0, then delete is from our map and decrease the seen count
        if (isSeens[sLeft] === 0) {
          delete isSeens[sLeft];
          isSeenCount--;
        }
      }
    }

    // update our max count to be the max of our current max count or the window that we have created with the two pointers
    maxCount = Math.max(maxCount, right - left + 1);
    // increase our right pointer and iterate through the ss
    right++;
  }
  return maxCount;
};

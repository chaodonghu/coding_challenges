// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
var peakIndexInMountainArray = function (arr) {
  var findPeak = function (arr, low, high) {
    if (!arr.length) {
      return -1;
    }
    // we need to look for the point in the array where the mountain stops increasing
    const mid = Math.floor(low + (high - low) / 2);

    // base case: if the value at the mid is the highest peak then retrn it
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid] < arr[mid - 1]) {
      // search the left side of the array, with mid being the highpoint
      return findPeak(arr, low, mid);
    }

    if (arr[mid] < arr[mid + 1]) {
      //search the right side of the array, with mid becoming the low point
      return findPeak(arr, mid, high);
    }
  };

  // start at the corners of the array
  return findPeak(arr, 0, arr.length - 1);
};

// Time: O(log N)
// Space; O(1)
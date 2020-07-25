// gotcha: [2,1,2,2,2]
// the repeats could wrap around the whole array, such that, left, mid, right are all the same
// so because arr[left] === arr[mid] === arr[right], the only thing we can do is shave off
// one element one at a time, not knowing when a non-duplicate will be seen

// so [2,1,2,2,2] becomes [1,2,2,2]
// arr[left] no longer equals arr[mid], but then arr[mid] === arr[right]

// so we shave off elements from the right..
// [1,2,2,2] => ...zzz.... becomes => [1,2]

// and we're done!

var findMin = function (nums) {
  if (!nums || !nums.length) return -1;
  return binarySearch(nums, { left: 0, right: nums.length - 1 });
};

function binarySearch(arr, { left, right }) {
  if (left >= right) return arr[left]; // we have ended at one element

  let mid = Math.floor((left + right) / 2);

  // if left element = mid element, it means everyhting in between is also useless... right?
  if (left !== mid && arr[left] === arr[mid]) {
    // but because there could be a min between left and mid, we can't just drop everything between left<->mid...
    // return binarySearch(arr, { left:mid, right}) <-- SO THIS IS WRONG!!!

    // instead we only drop 1 element at a time
    return binarySearch(arr, { left: left + 1, right });
  }

  // same logic as above
  if (right !== mid && arr[mid] === arr[right]) {
    return binarySearch(arr, { left, right: right - 1 });
  }

  // check whether right side is increasing, if so, we know its useless, and should only look to the left
  const isMidToRightAscending = arr[right] > arr[mid];

  if (isMidToRightAscending) {
    // but note that for [3,1,2], mid could still contain element, so dont use right=mid-1
    return binarySearch(arr, { left, right: mid });
  }

  return binarySearch(arr, { left: mid + 1, right });
}

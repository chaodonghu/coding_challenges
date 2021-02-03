// Flatten a nested array. You must account for varying levels of nesting.
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function steamrollArray(arr, flattenedArray = []) {
  // loop through all elements of the array
  arr.forEach((item) => {
    // if the item is an array then recursively call steam roll array
    if (Array.isArray(item)) {
      steamrollArray(item, flattenedArray);
    } else {
      // add the item to the flattenedArray
      flattenedArray.push(item);
    }
  });

  return flattenedArray;
}

interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any
  ): Array<T>;
}

// The array is 'this'
Array.prototype.myFilter = function<T>(callbackFn: (value: T, index: number, array: T[]) => boolean, thisArg?: any) {
  const results: T[] = [];

  // loop through each element in the array
  this.forEach((value: T, index: number) => {
    // if the callback function returns back true, add the el to our results
    if (callbackFn.call(thisArg, value, index, this)) {
      results.push(value);
    }
  });

  // return the results
  return results;
};

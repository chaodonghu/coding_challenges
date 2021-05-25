function limit (count) {
  let currentCount = 0;

  return () => {
    if (currentCount < count) {
      console.log(1);
      currentCount++;
    } else {
      console.log(undefined);
    }
  };
};

// 1. limit(3)
// this will return back a function, the entire anonymous function call of
//  return () => {
    // if (currentCount < count) {
      // console.log(1);
    // } else {
      // console.log(undefined);
    // }
  // };
// this return statement however will not execute the function, as a function is only
// executed with ()


// 2. const x = limit(3);
// console.log(typeof x)
// the contents of our inner function will be stored in a variable x
// in this inner function we have access to the `currentCount` variable which is outside of the scope of the function due to
// the concept of closures

// the inner function preserves the scope chain of the enclosing function at the time the enclosing cuntion is executed.

// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4

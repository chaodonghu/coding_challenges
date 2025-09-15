/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  // We need a timeoutId incase the debounced function is called again
  let timeoutId;
  // utilize function rather than arrow function to preserve the 'this' context
  return function (...args) {
    // if the debounced function is called again, clear the timeout and set a new timeout
    if (timeoutId) clearTimeout(timeoutId);
    // set a new timeout Id
    timeoutId = setTimeout(() => {
      // has the same 'this' as the outer function's as it's within an arrow function
      func.apply(this, args);
    }, wait);
  };
}

// Example usage
function sayHello() {
  console.log("My name is", this.name);
}

const amy = {
  name: "amy",
  speak: debounce(sayHello),
};

amy.speak();

// Resource: https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e
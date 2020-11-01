/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
  let objInstance; //private variable
  function create() {
    //private function to create methods and properties
    let isRunning = false;
    let start = () => {
      isRunning = true;
    };

    let stop = () => {
      isRunning = false;
    };

    let currentState = () => {
      return isRunning;
    };
    return {
      currentState,
      start,
      stop,
    };
  }

  return {
    getInstance: () => {
      if (!objInstance) {
        objInstance = create();
      }

      return objInstance;
    },
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
// expect both to be false
console.log(obj1.currentState());
console.log(obj2.currentState());
// only start obj1 however obj2 will point to the same object as well
obj1.start();
// expect both to be true
console.log(obj1.currentState());
console.log(obj2.currentState());

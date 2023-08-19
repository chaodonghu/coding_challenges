/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  const prototype = classFunction?.prototype;

  while (obj !== null && obj !== undefined) {
    // traverse the entire prototype chain, since inheritence is achieved with the prototype chain
    obj = Object.getPrototypeOf(obj);
    // if we land on a level of inheritence
    if (obj === prototype) return true;
  }

  // once we reach null (last level of the prototype chain) then return false
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

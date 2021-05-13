/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  // get rid of the first and last characters which are brackets
  s = s.slice(1, -1);
  let arr = [];

  // go through the string
  for (let i = 1; i < s.length; i++) {
    // have two parts, and split it at the index we are currently at (starting at index 1)
    // make all the combinations of the first slice
    let p1 = makeCombos(s.slice(0, i));
    // make all the combinations of the second slice
    let p2 = makeCombos(s.slice(i));

    if (p1.length && p2.length) {
      for (let x1 of p1) {
        for (let x2 of p2) {
          arr.push(`(${x1}, ${x2})`);
        }
      }
    }
  }
  return arr;
};

var makeCombos = function (s) {
  let set = new Set(); // Use set so that it keeps distinct values
  // if after getting rid of leading 0's (eg. 01), the string remains the same then add it to our set without modification
  if (String(Number(s)).length === s.length) set.add(s);
  if (s.length === 1) return [...set];

  // go through the string and put a dot at each index
  for (let i = 1; i < s.length; i++) {
    // conversion to number ensures that all leading 0's are removed
    let dotNotation = Number(`${s.slice(0, i)}.${s.slice(i)}`);

    // only add to our set if we retain digits during the conversion  (e.g. 0012 --> 12)
    // since we will be adding a ., the new string length should be + 1
    if (String(dotNotation).length === s.length + 1) set.add(dotNotation);
  }

  return [...set];
};

// Time: O(N^3)
// Space: O(N^3)

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  // make a set of outgoing cities
  let outgoingCities = new Set();

  // add to our list of outgoing cities
  for (let [outgoing, _] of paths) {
    outgoingCities.add(outgoing);
  }

  for (let [_, incoming] of paths) {
    // if our outgoing cities set does not have the incoming city in it then this is our final destination since the incoming city does not exist as a connection or outgoing city
    if (!outgoingCities.has(incoming)) {
      return incoming;
    }
  }

  return "";
};

// Time: O(N) since we have to go through all of the paths twice
// Space: O(N) the length of the set will be the number of outgoing cities
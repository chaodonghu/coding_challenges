// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
//
// Note:
//
// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// One must use all the tickets once and only once.
// Example 1:
//
// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
// Example 2:
//
// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
//              But it is larger in lexical order.

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

var findItinerary = function (tickets) {
  const map = {};
  const res = [];

  const dfs = (node) => {
    const des = map[node];
    while (des && des.length > 0) {
      // recursively run dfs with the destination as the node
      dfs(des.shift());
    }
    // push node to top of array result/queue
    res.unshift(node);
  };

  // ES6: Destructuring array
  for (let [dep, des] of tickets) {
    // Add the array of destinations for each deperature/origin into a map
    map[dep] = [...(map[dep] || []), des];
  }

  // sort the arrays of locations associated with each key in the map
  for (let loc in map) {
    map[loc].sort();
  }

  dfs("JFK");

  return res;
};

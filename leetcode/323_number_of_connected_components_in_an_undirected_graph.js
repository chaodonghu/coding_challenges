// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
//
// Return the number of connected components in the graph.
//
//
//
// Example 1:
//
//
// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:
//
//
// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1
//
//
// Constraints:
//
// 1 <= n <= 2000
// 1 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai <= bi < n
// ai != bi
// There are no repeated edges.

var countComponents = function (n, edges) {
  var count = 0;
  // track the visited vertices
  var isVisited = [];
  // create an adjacency list that contains all the adjacent vertices
  var graph = [];

  for (var j = 0; j < n; j++) {
    isVisited.push(false);
    graph.push([]);
  }

  for (j = 0; j < edges.length; j++) {
    let [edge1, edge2] = edges[j];
    graph[edge1].push(edge2);
    graph[edge2].push(edge1);
  }

  // loop through all the nodes, if the node has already been visited then skip
  for (var node = 0; node < n; node++) {
    if (isVisited[node]) continue;
    dfs(node, isVisited, graph);
    count++;
  }
  return count;
};

function dfs(node, isVisited, graph) {
  // set the node to be visited as true
  isVisited[node] = true;
  // get all the edges of this node
  let nodes = graph[node];
  for (var i = 0; i < nodes.length; ++i) {
    if (isVisited[nodes[i]]) continue;
    dfs(nodes[i], isVisited, graph);
  }
}


// Time: O(E + V)
// Space: O(E + V)

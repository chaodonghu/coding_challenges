// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// The graph
const adjacencyList = new Map();

// Add node
const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

// Add edge, undirected (one way)
const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// Adjacency List should look like:
// adjacencyList Map(11) {
//   'PHX' => [ 'LAX', 'JFK' ],
//   'BKK' => [ 'MEX', 'LIM' ],
//   'OKC' => [ 'JFK' ],
//   'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
//   'LAX' => [ 'PHX', 'MEX' ],
//   'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
//   'EZE' => [ 'MEX' ],
//   'HEL' => [ 'JFK' ],
//   'LOS' => [ 'JFK' ],
//   'LAP' => [],
//   'LIM' => [ 'MEX', 'BKK' ]
// }

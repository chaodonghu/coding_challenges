// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

// Part 1 - Create an adjacency matrix of all the airports and their destinations
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

console.log("AdjacencyList", adjacencyList);
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

// Part 2 - Find all the ways to get to BKK
function bfs(start) {
  const visited = new Set();
  // First in first out
  const queue = [start];
  while (queue.length > 0) {
    // get the first element off of the queue
    const airport = queue.shift(); // mutates the queue
    // get all the destinations in our adjacency list
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(
          `You must visit these airports to reach Bangkok ${Array.from(
            visited.values()
          )}`
        );
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

bfs("PHX");

// Part 3
function bfs(start) {
  const visited = new Set();
  // First in first out
  const queue = [start];
  while (queue.length > 0) {
    // get the first element off of the queue
    const airport = queue.shift(); // mutates the queue
    // get all the destinations in our adjacency list
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(
          `You must visit these airports to reach Bangkok ${Array.from(
            visited.values()
          )}`
        );
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

bfs("PHX");

function dfs(start, visited = new Set()) {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found Bangkok`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");

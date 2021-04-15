/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let sortedOrder = [];

  // count all the incoming edges
  let inDegree = new Array(numCourses).fill(0);
  let graph = new Array(numCourses).fill(0).map(() => Array());

  // build our graph where the key is the prerequisite and it's value is an array of courses that it satisfies
  for (let i = 0; i < prerequisites.length; i++) {
    let [parent, child] = prerequisites[i];
    graph[parent].push(child);
    inDegree[child]++;
  }

  // now we find all the sources, or in other words, all edges that do not have an indegree
  let sources = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  while (sources.length > 0) {
    let vertex = sources.shift();
    sortedOrder.push(vertex);
    graph[vertex].forEach((child) => {
      inDegree[child]--;

      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  return sortedOrder.length === numCourses;
};

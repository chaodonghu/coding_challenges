// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
//
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.
//
//
//
// Example 1:
//
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:
//
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
//
//
// Constraints:
//
// 1 <= numCourses <= 105
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

function canFinish(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = new Array(numCourses).fill(0).map((r) => []);

  // add to our adjacency matrix
  for (let [course, prereq] of prerequisites) {
    adj[prereq].push(course);
  }

  // go through our number of courses
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;

  function dfs(course) {
    // if we already seen the course then we can take it
    if (seen.has(course)) return true;
    // if we are currently seeing the course, in that it hasn't been seen yet or the prereqs of it hasn't been satisfied
    if (seeing.has(course)) return false;

    seeing.add(course);
    // go through all the courses this prereq course satisfies
    for (let reqSatisfied of adj[course]) {
      if (!dfs(reqSatisfied)) {
        return false;
      }
    }
    seeing.delete(course);
    seen.add(course);
    return true;
  }
}

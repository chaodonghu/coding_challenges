// There are a total of n courses you have to take labelled from 0 to n - 1.
//
// Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.
//
// Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.
//
// If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
//
//
//
// Example 1:
//
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:
//
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:
//
// Input: numCourses = 1, prerequisites = []
// Output: [0]


function findOrder(numCourses, prerequisites) {
  let answer = [];
  let graph = new Map();

  let indegree = new Array(numCourses).fill(0);

  for (let [course, prerequisite] of prerequisites) {
    console.log('course', course);
    console.log('prerequisite', prerequisite);
    if (!graph.has(prerequisite)) {
      graph.set(prerequisite, []);
    }
    // push the course into the array of courses the prerequisite satisfies
    graph.get(prerequisite).push(course);
    // increase our index of the course of the indegree
    indegree[course]++;
  }

  let queue = [];

  console.log("indegree", indegree);
  // loop through our indegree array and push any course with 0 indegrees (no prereqs), we can take these courses in the first semester so push them into our queue
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      console.log("i", i);
      queue.push(i);
      answer.push(i);
    }
  }

  while (queue.length) {
    let size = queue.length;

    // loop through the current queue
    for (let i = 0; i < size; i++) {
      let prerequisite = queue.shift();

      if (graph.has(prerequisite)) {
        for (let course of graph.get(prerequisite)) {
          indegree[course]--;
          if (indegree[course] === 0) {
            queue.push(course);
            console.log("course", course);
            answer.push(course);
          }
        }
      }
    }
  }

  console.log("answer", answer);

  return indegree.every((e) => e === 0) ? answer : [];
}

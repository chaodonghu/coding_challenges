// You are given an integer n which indicates that we have n courses, labeled from 1 to n. You are also given an array relations where relations[i] = [a, b], representing a prerequisite relationship between course a and course b: course a has to be studied before course b.
//
// In one semester, you can study any number of courses as long as you have studied all the prerequisites for the course you are studying.
//
// Return the minimum number of semesters needed to study all courses. If there is no way to study all the courses, return -1.
//
//
//
// Example 1:
//
//
// Input: n = 3, relations = [[1,3],[2,3]]
// Output: 2
// Explanation: In the first semester, courses 1 and 2 are studied. In the second semester, course 3 is studied.
// Example 2:
//
//
// Input: n = 3, relations = [[1,2],[2,3],[3,1]]
// Output: -1
// Explanation: No course can be studied because they depend on each other.
//
//
// Constraints:
//
// 1 <= n <= 5000
// 1 <= relations.length <= 5000
// 1 <= a, b <= n
// a != b
// All the pairs [a, b] are unique.
/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  // have an adjaceny matrix which maps all the prerequisites along with it's courses
  let graph = new Map();

  // indegree array which represents how many courses point to it, with the index representing it's value
  let indegree = new Array(n + 1).fill(0);
  for (let [prerequisite, course] of relations) {
    if (!graph.has(prerequisite)) {
      graph.set(prerequisite, []);
    }
    // push the course into the array of courses the prerequisite satisfies
    graph.get(prerequisite).push(course);
    // increase our index of the course of the indegree
    indegree[course]++;
  }

  let queue = [];
  // loop through our indegree array and push any course with 0 indegrees (no prereqs), we can take these courses in the first semester so push them into our queue
  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let semesters = 0;

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
          }
        }
      }
    }
    // after we have finished looping through our level order traversal of the queue
    semesters++;
  }

  // if our entire indegree array is full of 0s meaning that no more courses point to it as a prerequisite or has been taken then return the number of semesters
  return indegree.every((e) => e === 0) ? semesters : 0;
};

//

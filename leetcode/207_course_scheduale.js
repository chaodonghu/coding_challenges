function canFinish(numCourses, prerequisites) {
  let graph = new Map();

  let indegree = new Array(numCourses + 1).fill(0);

  for (let [course, prerequisite] of prerequisites) {
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
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
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
            answer.push(i);
          }
        }
      }
    }
  }

  console.log('answer', answer);
  // if our entire indegree array is full of 0s meaning that no more courses point to it as a prerequisite or has been taken then return the number of semesters
  return indegree.every((e) => e === 0);

}

// Given n processes, each process has a unique PID (process id) and its PPID (parent process id).
//
// Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.
//
// We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.
//
// Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.
//
// Example 1:
// Input:
// pid =  [1, 3, 10, 5]
// ppid = [3, 0, 5, 3]
// kill = 5
// Output: [5,10]
// Explanation:
//            3
//          /   \
//         1     5
//              /
//             10
// Kill 5 will also kill 10.
// Note:
// The given kill id is guaranteed to be one of the given PIDs.
// n >= 1.

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */

// Solution #1: DFS approach
const dfs = (parents, kill, res) => {
  // push the desired kill into our array
  res.push(kill);
  // if the desired target is not a parent then return, we have reached the end of the bst
  if (!parents[kill]) return;
  for (let pid of parents[kill]) {
    // call dfs on all the pids
    dfs(parents, pid, res);
  }
};

var killProcess = function (pid, ppid, kill) {
  // have a hash map of all the parents and their children
  const parents = {};
  for (let i = 0; i < ppid.length; i++) {
    parents[ppid[i]] = parents[ppid[i]] || [];
    parents[ppid[i]].push(pid[i]);
  }

  const res = [];
  dfs(parents, kill, res);
  return res;
};

// Solution 2: Stack approach
const killProcess = function (pid, ppid, kill) {
  const parents = new Map();
  const result = [];
  const stack = [kill];

  // loop through our ppid and add it to our map
  for (let i = 0; i < ppid.length; i++) {
    if (parents.has(ppid[i])) {
      parents.get(ppid[i]).push(pid[i]);
    } else {
      parents.set(ppid[i], [pid[i]]);
    }
  }

  while (stack.length > 0) {
    // pop the top of our stack
    const current = stack.pop();
    // push this as a process we need to kill
    result.push(current);

    // if the parents has our desired process as a parent
    if (parents.has(current)) {
      // push into our stack all of it's children processes
      stack.push(...parents.get(current));
    }
  }

  return result;
};

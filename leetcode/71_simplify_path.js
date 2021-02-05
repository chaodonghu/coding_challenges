/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // stack should only contain names
  const stack = [];
  const arr = path.split("/");

  for (let i = 0; i < arr.length; i++) {
    // ignore all current directories and spaces
    if (arr[i] == "." || arr[i] == "" || arr[i] == " ") {
      continue;
    }
    // if we go up two directories then we want to pop off the name
    else if (arr[i] == "..") {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return `/${stack.join('/')}`
};

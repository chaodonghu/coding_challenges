/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let pre = result[result.length - 1];
    if (i == 0 || intervals[i][0] > pre[1]) {
      result.push(intervals[i]);
    } else {
      pre[1] = Math.max(intervals[i][1], pre[1]);
    }
  }

  return result;
};

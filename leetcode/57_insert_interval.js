// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
//
// You may assume that the intervals were initially sorted according to their start times.
//
// Example 1:
//
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
//
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let size = intervals.length;
    let index = 0;
    let result = [];

    // while we are still looping through and the end of the current interval is less than the start of the new interval
    while (index < size && intervals[index][1] < newInterval[0]) {
        result.push(intervals[index]);
        index++;
    }

    // while we are still looping through and the start of the current interval is less then the end of the new interval then set the new newInterval
    while (index < size && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }

    result.push(newInterval);
    while (index < size) {
        result.push(intervals[index]);
        index++
    }

    return result;
};

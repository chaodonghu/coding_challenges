// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
//
// You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.
//
// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.
//
//
//
// Example 1:
//
// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:
//
// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
//
//
// Constraints:
//
// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105

var carPooling = function (trips, capacity) {
  let timestamps = [];

  for (let [passengers, start, end] of trips) {
    // push the start and the passengers at that time and the end of the trip and the passengers at that time to the timestamps array
    timestamps.push([start, passengers], [end, -passengers]);
  }

  // sort the timestamps by increasing time and then passengers
  timestamps.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let usedCapacity = 0;
  for (let [, passengerChange] of timestamps) {
    usedCapacity += passengerChange;
    // if the used capacity is ever greater than the capacity we return false
    if (usedCapacity > capacity) {
      return false;
    }
  }

  return true;
};

// Time: O(N log N)
// Space: O(N)

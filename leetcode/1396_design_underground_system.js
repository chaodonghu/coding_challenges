var UndergroundSystem = function () {
  this.checkInTimes = {};
  this.totalTimes = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  // store the checkin times as an tuple, with the station name and time
  this.checkInTimes[id] = [stationName, t];
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  // deconstruct our checkin start station and checkin times
  const [checkInStart, checkInTime] = this.checkInTimes[id];

  // check if we already have a duration of the start and end stations in our total times map
  const existingDuration = this.totalTimes[`${checkInStart}-${stationName}`];
  if (existingDuration) {
    const [ totalTime, count ] = existingDuration;
    // add the difference between the end station and start station to the total times object and increase the count
    // count represents the number of times a customer has started and ended the same route
    this.totalTimes[`${checkInStart}-${stationName}`] = [
      t - checkInTime + totalTime,
      count + 1,
    ];
  } else {
    // if we dont have an existing record of the trip then add the different in the times and instantiate the count to be 1
    this.totalTimes[`${checkInStart}-${stationName}`] = [t - checkInTime, 1];
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const [ totalTime, count ]= this.totalTimes[`${startStation}-${endStation}`];
  return totalTime / count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

// Time: O(1) since our checkin, checkout and getAverageTime functions all are constant lookup
// Space: O(S^2 + P) where S is the number of stations and P is the number of passengers making a journey concurrently during peak time
// We can reasonably expect every possible pair of stations on the network to have an entry in this hashmap which is S^2
// The other hashmap hold one entry for each passenger who has a checkin but not checkout

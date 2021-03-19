/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  // instantiate a queue with with the first keys in room 0
  let queue = [...rooms[0]];
  // instantiate a dp that will indicate which rooms we have already visited
  let dp = new Array(rooms.length).fill(false);
  // we always start in room 0 so that will always be true
  dp[0] = true;

  // while we have keys to the rooms we need to visit in our queue
  while (queue.length) {
    // get the first element in the queue
    let room = queue.shift();
    // mark that we have visited this room
    dp[room] = true;
    // filter out any keys to the rooms we have already visited
    let preQueue = rooms[room].filter((e) => !dp[e]);
    // push the keys that we need to visit into the queue
    queue.push(...preQueue);
  }

  // our dp array should be all true if we could visit every room
  return dp.every((el) => el);
};

var canVisitAllRooms = function (rooms) {
  // our unique keys will always contain whatever keys are in room 0
  let uniqueKeys = new Set([0, ...rooms[0]]);
  // add the keys of room 0 into the queue
  let queue = [...rooms[0]];

  while (queue.length) {
    let currentKey = queue.shift();
    // go through all the keys in our current room
    rooms[currentKey].forEach((key) => {
      // if the unique keys object does not contain the key then add it into the queue and unique keys, so we know we have already visited the room
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        queue.push(key);
      }
    })
  }

  // our unique keys, what we visited should equal the amount of rooms we were provided
  return uniqueKeys.size === rooms.length;
};
// Time: O (N + K) where k is the maximum number of keys in a room and N is the number of rooms
// Space: O(N) to store the stack and seen

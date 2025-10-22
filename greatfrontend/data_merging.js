// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/data-merging
/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
  // Make a new map that stores each user
  const byUser = new Map();
  const order = [];

  // loop through each session
  for (const { user, duration, equipment } of sessions) {
    // If our map doesn't already contain our user, set it as a new key
    if (!byUser.has(user)) {
      byUser.set(user, { user, duration: 0, equipmentSet: new Set() });
      order.push(user);
    }

    const currentUser = byUser.get(user);
    // Increate our duration
    currentUser.duration += duration;
    // If the equipment array isn't empty
    if (Array.isArray(equipment)) {
      // add each item to the equipment set, the equipmentSet is already a set so it removes duplicates
      for (const item of equipment) currentUser.equipmentSet.add(item);
    }
  }

  // Go through our order map which contains all the users
  return order.map((user) => {
    // Rebuild our array
    // Get the duration and equipment set
    const { duration, equipmentSet } = byUser.get(user);
    return {
      user,
      duration,
      // Sort the set in alphabetical order
      equipment: Array.from(equipmentSet).sort(),
    };
  });
}

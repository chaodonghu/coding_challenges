// // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// //
// // Note
// // You can return the array with its elements in any order.

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.

const difference = (a1, a2) => {
  // make a new set out of a2
  const a2Set = new Set(a2);
  // filter out all elements in a1 where a2 does not have
  return a1.filter((x) => {
    return !a2Set.has(x);
  });
};

const diffArray = (a1, a2) => {
  // find the symmetric differences between a1 and a2
  return [...difference(a1, a2), ...difference(a2, a1)];
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

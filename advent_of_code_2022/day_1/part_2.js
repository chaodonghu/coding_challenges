const { input } = require("./input");

const sumsSorted = input
  .map((elf) => {
    return elf
      .split("\n") // make an array for each elf
      .map((item) => parseInt(item, 10)) // since each element is a string -> convert it to a integer
      .reduce((sum, v) => sum + v, 0); // add up the array
  })
  .sort((a, z) => z - a); // sort the array by least to greatest

console.log(sumsSorted[0] + sumsSorted[1] + sumsSorted[2]);

// OR

console.log(sumsSorted.slice(0, 3).reduce((sum, v) => sum + v, 0));

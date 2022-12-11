const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString() // convert to string
  .trim() // trim the empty spaces
  .split("\n\n"); // add commas and split into array by the double new lines

// console.log("input", input);

module.exports = {
  input,
};

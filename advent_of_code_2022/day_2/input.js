const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString() // convert to string
  .trim() // trim the empty spaces
  .split("\n") // add comma and split into array by the new line
  .map((v) => v.split(" ")); // split each round by a comma

module.exports = {
  input,
};

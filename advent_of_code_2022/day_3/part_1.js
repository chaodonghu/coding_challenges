const { input } = require("./input");

const a_code = "a".charCodeAt(0);
const A_code = "A".charCodeAt(0);

const intersection = (...arrs) => {
  const counts = {};
  for (let arr of arrs) {
    const unique = [...new Set(arr)];

    for (let val of unique) {
      if (!counts[val]) {
        counts[val] = 0;
      }
      counts[val]++;
    }
  }

  // Find the first common character between both strings
  const intersected = Object.entries(counts).find(
    ([_, count]) => count === arrs.length
  );

  // there might not be an intersection
  return intersected?.[0];
};

const itemTypesScore = input.map((line) => {
  const length = line.length;
  const leftPart = line.slice(0, Math.floor(length / 2));
  const rightPart = line.slice(Math.floor(length / 2));

  const intersectedChar = intersection(leftPart, rightPart);
  if (!intersectedChar) return 0;

  // if it is a lower case letter
  if (/[a-z]/.test(intersectedChar)) {
    return intersectedChar.charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    // if it is a upper case leter
    return intersectedChar.charCodeAt(0) - "A".charCodeAt(0) + 27;
  }
});

console.log(itemTypesScore.reduce((a, b) => a + b));

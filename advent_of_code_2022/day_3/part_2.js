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

const group = (arr, num) => {
	const groupArray = [];
  // The number of groups
	const end = Math.ceil(arr.length / num);

	for (let i = 0; i < end; i++) {
    // starting element of group of num
		const from = i * num;
    // ending element of group of num
		const to = (i + 1) * num;
		groupArray.push(arr.slice(from, to));
	}

	return groupArray;
};

const groupOf3 = group(
	input.map((v) => v.split('')),
	3
);

const itemTypesScore = groupOf3.map((group) => {
	// Or `_.intersection()`
	const [same] = intersection(...group);
  // if the intersection string is lower case
	if (/[a-z]/.test(same)) {
		return same.charCodeAt(0) - a_code + 1;
	} else {
    // if the intersection string is uppercase
		return same.charCodeAt(0) - A_code + 27;
	}
});

console.log(itemTypesScore.reduce((a, b) => a + b));

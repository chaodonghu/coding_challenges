/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  let recur = (remain, index, curr) => {
    if (remain < 0) return;

    if (remain === 0) {
      result.push([...curr]);
    }

    for (let i = index; i < candidates.length; i++) {
      curr.push(candidates[i]);
      recur(remain - candidates[i], i, curr);
      curr.pop();
    }
  };

  recur(target, 0, []);
  return result;
};

function openLock(deadends, target) {
  const dead = new Set(deadends);
  const queue = [["0000", 0]];
  const seen = new Set(["0000"]);

  for (let [curr, turns] of queue) {
    if (curr === target) return turns;
    if (dead.has(curr)) continue;
    for (let next of getNextStates(curr)) {
      if (seen.has(next)) continue;
      seen.add(next);
      queue.push([next, turns + 1]);
    }
  }

  return -1;
}

function getNextStates(s) {
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    ans.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
    ans.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
  }

  return ans;
}

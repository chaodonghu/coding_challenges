var prisonAfterNDays = function (cells, N) {
  const cache = new Map();
  let flag = false;

  for (let i = 0; i < N; i++) {
    const nextState = new Array(8).fill(0);

    for (let j = 1; j < cells.length -1; j++) {
      nextState[j] = cells[j - 1] === cells[j + 1] ? 1 : 0;
    }

    // find if we have already experienced a day that we seen before
    if (!cache.has(String(nextState))) {
      cache.set(String(nextState), i);
    } else {
      // if we have already seen a day like this then we set the flag to true
      flag = true;
      break;
    }
    cells = nextState;
  }


  // if we have a cycle, then find where our N would fit into this cycle
  if (flag) {
    N = N % cache.size;

    for (let i = 0; i < N; i++) {
      const nextState = new Array(8).fill(0);
      for (let j = 1; j < cells.length -1; j++) {
        nextState[j] = cells[j - 1] === cells[j + 1] ? 1 : 0;
      }
      cells = nextState;
    }
  }
  return cells;
};

// Time: O(N * 14) since our map will be at most 14 iterations of the cells
// Spaec: O(N * 14) since our map will fit 14 iterations

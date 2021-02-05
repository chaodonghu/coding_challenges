var possibleBipartition = function (N, dislikes) {
  let graph = [];
  for (let i = 0; i <= N; i++) {
    graph.push([]);
  }

  for (let d of dislikes) {
    graph[d[0]].push(d[1]);
    graph[d[1]].push(d[0]);
  }

  let colored = {};
  const dfs = (node, color) => {
    if (colored[node]) {
      return colored[node] === color;
    }
    colored[node] = color;

    const neis = graph[node];
    for (let nei of neis) {
      if (!dfs(nei, color ^ 1)) {
        return false;
      }
    }
    return true;
  };

  for (let j = 1; j <= N; j++) {
    if (!colored[j] && !dfs(j, 0)) {
      return false;
    }
  }

  return true;
};

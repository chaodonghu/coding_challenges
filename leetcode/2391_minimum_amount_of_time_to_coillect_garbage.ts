function garbageCollection(garbage: string[], travel: number[]): number {
  const time: Record<string, number> = {
    M: 0,
    P: 0,
    G: 0,
  };

  const last: Record<string, number> = {
    M: 0,
    P: 0,
    G: 0,
  };

  const houses = garbage.length;

  for (let i = 0; i < houses; i++) {
    // go through each letter/type of garbage for the current house
    for (const trash of garbage[i]) {
      // add one to the time it takes to pickup the trash and the time it too to travel to that house if it exists
      time[trash] += 1 + last[trash];
      // reset the time it takes to travel to that house
      last[trash] = 0;
    }

    // go through each type of trash and add the travel time
    for (const X of "MPG") {
      last[X] += travel[i];
    }
  }

  return time.M + time.P + time.G;
}

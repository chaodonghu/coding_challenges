// There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.
//
// Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.
//
// Example 1:
// Input:
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph looks like this:
//
//
// The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
// Example 2:
// Input:
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph looks like this:
//
//
// The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
//
//
// Constraints:
//
// The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
// The size of flights will be in range [0, n * (n - 1) / 2].
// The format of each flight will be (src, dst, price).
// The price of each flight will be in the range [1, 10000].
// k is in the range of [0, n - 1].
// There will not be any duplicated flights or self cycles.

var findCheapestPrice = function(n, flights, src, dst, K) {
    let map = new Map();

    for (let i = 0; i < flights.length; i++) {
        const [start, end, price] = flights[i];
        let edges = map.get(start) || [];
        edges.push([end, price]);
        map.set(start, edges);
    }

    let queue = [[0, src, K + 1]];

    while (queue.length) {
        const [price, city, stops] = queue.shift();
        if (city === dst) return price;
        if (stops > 0) {
            const nextFlights = map.get(city) || [];
            for (let i = 0; i < nextFlights.length; i++) {
                const [next, cost] = nextFlights[i];
                queue.push([cost + price, next, stops - 1]);
            }
            queue.sort((a, b) => a[0] - b[0]);
        }
    }

    return -1;
};

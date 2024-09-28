/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var networkDelayTime = function(times, n, k) {
    // use dijkstra's algo to find *longest* path with weighted edges

    // first, turn the times array into a graph object (adjacency list)
    // this would make running dijkstra's algo more efficient
    let graph = {};
    for(let i=0;i<times.length;i++) {
        let source = times[i][0];
        let target = times[i][1];
        let weight = times[i][2];

        // add the node to the new graph
        // 1. initialize
        if(!(source in graph)) {
            graph[source] = []
        }

        // 2. add target and weight
        graph[source].push([target, weight]);
    }
    
    // use modified dijkstra to find *max* time
    // use the code from class
    function dijkstra (graph, start) {
        const distances = {};
        const previous = {};
        const queue = [];
        const visited = new Set();

        // Initialize distances for all nodes from 1 to n
        for (let i = 1; i <= n; i++) {
            distances[i] = Infinity;
            previous[i] = null;
        }
        
        // Set the starting node distance to 0
        distances[start] = 0;
        queue.push([start, 0]);

        while(queue.length > 0) {
            // explore the nodes
            queue.sort((a,b) => a[1] - b[1]);
            const [currentNode, currentDistance] = queue.shift(); 

            if(visited.has(currentNode)) continue;
            visited.add(currentNode);
            
            // Check neighbors 
            if (graph[currentNode]) {
                for (let [neighbor, weight] of graph[currentNode]) {
                    const newDistance = distances[currentNode] + weight;
                    const oldDistance = distances[neighbor];

                    if (newDistance < oldDistance) {
                        distances[neighbor] = newDistance;
                        previous[neighbor] = currentNode;
                        queue.push([neighbor, newDistance]);
                    }
                }
            }
        }

        // Check if all nodes are reachable and find the longest time
        let maxDistance = 0;
        for (let node in distances) {
            if (distances[node] === Infinity) {
                return -1; // Not all nodes are reachable
            }
            maxDistance = Math.max(maxDistance, distances[node]);
        }

        return maxDistance; // Return the longest time to reach all nodes
    }

    return dijkstra(graph, k);
};
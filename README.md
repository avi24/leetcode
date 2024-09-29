# Leetcode Javascript problems

## Sorting an array

### Problem 912 
https://leetcode.com/problems/sort-an-array/  
This problem requires us to sort an array without using built-in functions in O(nlog(n)) time complexity while minimizing space complexity.
From class we learned that there are various O(nlog(n)) time algorithms and since stability is required in this case, Mergesort is my chosen implementation
While coding the solution I realized there could be some optimizations made such as removing the .slice() method as this creates multiple arrays and adds time/space to the algorithm.

## Network Delay Time

### Problem 743
https://leetcode.com/problems/network-delay-time/  
This problem requires us to see a directional graph and determines if a) all nodes in the graph receive a signal starting from point k and b) what the *longest* path is that it takes for all nodes to get the signal from point k. Since we have weighted edges and have to traverse a graph, Dijkstra's algorithm was the obvious choice. This algorithm, however, needs to be modified slightly to determine whether all nodes receive the signal and what the longest path is (instead of the shortest). I used most of the code from class while adding logic at the end to determine the longest path and whether all nodes are reached.
---
layout: '@/templates/BasePost.astro'
title: Favorite coding problems - Path Exists
description: First problem in series where I discuss random coding puzzles I find interesting.
pubDate: 2022-07-14T18:11:17.960Z
imgSrc: '/assets/images/image-post.jpeg'
imgAlt: 'Image post'
---

Lets start off this series with a interesting graph problem I came across.
Feels a very good problem to get basics clear, and understand what happens in many other graph problems.

#### Statement: [Leetcode 1971](https://leetcode.com/problems/find-if-path-exists-in-graph/)

Given: Bidirectional graph edge 2-d array, src and dest values.
Find if path exists from src to dest.


## Approach
The question looks clear - we just have to check whether any path exists between the two, given all edges.
So any traversal is enough to prove a path, if we start from given destination.

## Standard step before traversals: Create adjacency list
To start of any traversal, we create an adjacency list depicting various connections, in one to many relationship.
Since this is a unweighted graph, no need of saving weights.

So, lets start with some code, pythonic way.
```python
from collections import defaultdict

adj = defaultdict(list)
for u, v in edges :
	adj[u].append(v)
	adj[v].append(u)  # adj list ready
```
The `defaultdict(list)` is a type of dictionary, which automatically assigns a empty list value `[]` to  any new key, making things a bit easy. Totally optional,  a normal dictiontary can do as well.

## Explore each node in DFS
DFS stands for depth-first-search. This method recursively looks at next connected nodes before searching from other source nodes.
The general template can be deduced as
```
func dfs(node)
  // any req operation here
  for nei in adj[node]
    dfs(nei)
```

For our problem, we can stop recursion once we reach the destination. We shall return True from there.

```python
def dfs(node) :
    if node == destination : return True
    
    for nei in adj[node] :
        if not nei in vis and dfs(nei) :
            return True
    
    return False
```

 *There's a basic problem here, can you spot?*
#### As the problem involves an undirected graph, which implies there is no direction to the connections.

Any connection(u, v) means there are two connections: `u --> v` and `v --> u`.

### Hence we are revisiting the same nodes going back `v -> u`, which results in infinite recursive calls.
Since base condition is never met.

## Avoiding revisits: using a `visit` set.
And hence check if already visited before calling our dfs on neighbors.

```python
vis = set()
def dfs(node) :
    if node == destination : return True
    
    vis.add(node)
    
    for nei in adj[node] :
        if not nei in vis and dfs(nei) :
            return True
    
    # all nei checked, means no path found so far
    return False
```

## A smart optimisation: pruning.
Since in a dfs call, we explore node's all connections, if we dont find a path, next time there is no need to carry out those operations again.
To achieve this, we simply remove all the nodes from its adj list.


Finally,
```python
def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
    adj = defaultdict(list)
    vis = set()

    for u, v in edges :
        adj[u].append(v)
        adj[v].append(u)  # adj list ready


    # recursive dfs
    def dfs(node) :
        if node == destination : return True

        vis.add(node)

        for nei in adj[node] :
            if not nei in vis and dfs(nei) :
                return True

        adj[node] = []  #pruning: optimisation
        return False

    return dfs(source)   # main call
```
---
Thanks, this was the first problem of this series. More interesting problems coming up.
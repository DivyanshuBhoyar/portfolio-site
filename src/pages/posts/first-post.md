---
layout: '@/templates/BasePost.astro'
title: Random fav coding problems- Car pooling
description: Problem#2 where I discuss random coding problems I find interesting.
pubDate: 2022-07-18T14:59:16Z
imgSrc: '/assets/images/image-post7.jpeg'
imgAlt: 'Image post 7'
---

### Problem description : [Leetcode 1094](https://leetcode.com/problems/car-pooling/)
<em>Suppose a car drives in single direction. Given capacity of the car and trips[], find if all trips are possible. The trips[] contains a trip info (numPassenges, startPoint, endPoint).  </em>

#### Sample test cases
- Input: trips = `[[2,1,5],[3,3,7]]`, `capacity = 4` Output: false
- Input: trips = `[[2,1,5],[3,3,7]]`, `capacity = 5` Output: true

<hr>

## Let's begin thinking by observing whats happening with given test cases

```
t =>      1   2   3   4   5   6   7   8

trip#1    2   2   2   2   2
trip#2            3   3   3   3   3
total#    2   2   5   5   5   3   3   0
          -   -   exceeded    -   -   -
```

## Approach 1
A common approach that comes to mind is to track num of passengers at each point in pos.<br>
There are two operations involved, filling and emptying the car. To better track operations, it is better if we sort acc to start pos of the trip and iterate. We can empty at same pos, if prev trip passengers' pos expires before or at the current start.
```python
def carpool(trips, capacity) :
  trips = sorted(trips, key = lambda x : x[1])    # sort acc to end pos
  
  cap_used = 0
  for num, start, end in trips :
    cap_used += num
    # -- still thinking next step --
```
*Here we are using custom key, ele at idx1 in the trip*

To remove passengers from expired trip we need to store the trips in a structure. Such that
we can easily check if any trip with end pos less than start is already present. <br>
We use a priority queue acc to end pos, so that it always gives us the last active trip that ends.
If the trip expires at or before the current start, we can immediately free up the space
```python
def carpool(trips , capacity):
    trips = sorted(trips, key = lambda x: x[1])  # sort by start pos
    pq = PriorityQueue()   # end pos, num
    
    cap_used = 0
    for num, start, end in trips :
        # free up space from the earlier trip; if possible        
        while pq.queue and pq.queue[0][0] <= start :
            cap_used -= pq.get()[1]  
       
        #include the cur trip for now : 
        cap_used += num             #determnine later if it frees up space eventually
        pq.put((end, num))  
        
        if cap_used > capacity :
            return False
    return True
```

<hr>

## Approach #2: Concept of delta
One more trick that comes often in the problems involving allocation uses the concept of delta.
Delta signifies the change that occurs at some given point

### Instead of thinking about the range, we think about change at a given point, if passenger sits, cap is used and hence delta is positive, else delta is negative.
```python
def carpool(trips, capacity) :
    deltas = []
    for n, start, end in trips:
        deltas.append((start, n))
        deltas.append((end, -n))
    deltas.sort()
```
We need to track positions from left to right, its sensible to sort these deltas.
It makes tracking capacity used easier to track.

Iterate over these deltas and keep operating on the capacity used.
Since deltas are positive and negative, adding them up to certain point will yield the capacity used at that point. This includes the contribution form positions before it as we are going left to right.
```python
cap_used = 0
for loc in lst:
    cap_used += loc[1]
    if cap_used > capacity:
        return False
return True
```

Finally
```python
def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
    lst = []
    for n, start, end in trips:
        lst.append((start, n))
        lst.append((end, -n))
    lst.sort()
    
    pas = 0
    for loc in lst:
        pas += loc[1]
        if pas > capacity:
            return False
    return True
```
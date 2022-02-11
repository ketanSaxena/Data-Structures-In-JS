# Heap

## Definition

A Heap is a complete binary tree in which the value in each internal node is greater than (in case of a MaxHeap) or equal to the values in the children of that node.

## MaxHeap and MinHeap

- A Heap can either be a **MaxHeap** or a **MinHeap**.
- In a MinHeap the smallest element always stays at the top and likewise in MaxHeap the largest element stays on top.

```md
      3          <------- MinHeap
    /   \
   7     4
  / \   /
 9   8  5

      9          <------- MaxHeap
    /   \
   7     4
  / \   /
 6   5  2
```

## Array Representation of MaxHeap

**Note:** *To simplify, we can start filling array from index 1 instead of 0. Hence in this implementation the actual items in a heap would start from index 1. and Arr[0] would be null*

A MaxHeap is a Complete Binary Tree. A Max heap is typically represented as an array. The root element will be at Arr[0]. Below list shows indexes of other nodes for the ith node, i.e., Arr[i]:

- `Arr[Math.floor(i/2)]`    Returns the parent node.
- `Arr[2*i]`                Returns the left child node.
- `Arr[(2*i) + 1]`          Returns the right child node.

Hence a given MaxHeap below:
```
      9          <------- MaxHeap
    /   \
   7     4
  / \   /
 6   5  2
```

It's array representation would be `[9,7,4,6,5,2]`.

## Operations in MaxHeap

### Insertion

We insert the element at the bottom and then swim it up until parent element is not bigger or root node is reached.

#### Complexity: O(n)

### Deletion

We always pop or remove the largest/root element from a heap.
For that, we swap the root element with the last element in the array and then sink it down until no child element is not smaller than the number or leaf node is reached.

#### Complexity: O(n)

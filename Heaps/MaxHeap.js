class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  
  insert(val) {
    this.heap.push(val);
    let current = this.heap.length - 1;
    while (current > 1) {
      let parent = Math.floor(current / 2);
      let isRight = current % 2 !== 0;
      if (this.heap[parent] < this.heap[current]) {
        [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
      } else {
        break;
      }
      current = parent;
    }
  }
  
  pop() {
    const poppedElement = this.heap[1];
    [this.heap[this.heap.length - 1], this.heap[1]] = [this.heap[1], this.heap[this.heap.length - 1]];
    this.heap = this.heap.slice(0, this.heap.length - 1);
    let current = 1;
    while (current * 2 <= this.heap.length) {
      const child = this.heap[current * 2] > this.heap[current * 2 + 1] ? current * 2 : current * 2 + 1;
      if (this.heap[current] < this.heap[child]) {
        [this.heap[current], this.heap[child]] = [this.heap[child], this.heap[current]];
      } else {
        break;
      }
      current = child;
    }
    console.log('popped', poppedElement, ' heap: ', this.heap);
    return poppedElement;
  }
  
  getArray() {
    return this.heap;
  }
}


// Usage example

let heap = new MaxHeap();
heap.insert(4);
heap.insert(9);
heap.insert(7);
heap.insert(3);
heap.insert(8);
console.log('heap: ', heap.getArray());
console.log('popping element: ', heap.pop());
console.log('heap after popping: ', heap.getArray());
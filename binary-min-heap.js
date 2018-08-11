// A heap is a tree data structure that satisfies the heap property: if P is a parent node of C, then the value of P
// is >= (in a max heap) or <= (in a min heap) than the value of C. The node at at the top, with no parents, is called a root node.
// This one implemented here is a binary min heap (very similar to binary search tree, but diffirent in what way, remember?)

// Binary Heap is a good way to implement a Priority Queue, which can be implemented with LL also, but Binary Heap is better

// left child: (i * 2) + 1
// right child: (i * 2) + 2
// parent: Math.floor((i - 1) / 2)

class MinHeap {
  constructor() {
    this.items = [];
  }

  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.items.length; }
  hasRightChild(index) { return this.getRightChildIndex(index) < this.items.length; }
  hasParent(index) { return this.getParentIndex(index) >= 0; }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
  rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
  parent(index) { return this.items[this.getParentIndex(index)]; }

  swap(indexOne, indexTwo) {
    [this.items[indexOne], this.items[indexTwo]] = [this.items[indexTwo], this.items[indexOne]];
  }

  peek() {
    // This method returns, but doesn't extract, the min item in the heap
    return this.items[0];
  }

  poll() {
    // This method extracts and returns the min item in the heap
    if (this.items.length > 0) {
      const item = this.items[0];
      this.items[0] = this.items.pop();
      this.heapifyDown();
      return item;
    }
  }

  add(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.items.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerChildIndex]) {
        return;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

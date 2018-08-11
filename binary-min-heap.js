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

  _getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  _getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  _getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

  _hasLeftChild(index) { return this._getLeftChildIndex(index) < this.items.length; }
  _hasRightChild(index) { return this._getRightChildIndex(index) < this.items.length; }
  _hasParent(index) { return this._getParentIndex(index) >= 0; }

  _getLeftChild(index) { return this.items[this._getLeftChildIndex(index)]; }
  _getRightChild(index) { return this.items[this._getRightChildIndex(index)]; }
  _getParent(index) { return this.items[this._getParentIndex(index)]; }
}

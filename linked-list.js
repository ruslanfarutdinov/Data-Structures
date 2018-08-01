class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addToTail(value) {
    const node = {
      value,
      next: null,
    };

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeHead() {
    const removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

// Time complexity of the linked list methods?
// addToTail - O(1)
// removeHead - O(1)
// contains - O(n), because have to traverse thru the whole linked list looking for the value

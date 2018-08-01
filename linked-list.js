class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addToTail(value) {
    let node = {
      value: value,
      next: null,
    };

    if (this.head === this.tail === null) {
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

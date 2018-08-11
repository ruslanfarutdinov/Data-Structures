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
  // addToTail - O(1)

  removeHead() {
    const removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  }
  // removeHead - O(1)

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
// contains - O(n), because have to traverse thru the whole linked list looking for the value

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addToTail(value) {
    let node = {
      value: value,
      next: null,
    }

    if (this.head === this.tail === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}
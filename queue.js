class Queue {
  constructor() {
    this.size = 0;
    this.enqueuePos = 0;
    this.dequeuePos = 0;
  }

  enqueue(value) {
    this[this.enqueuePos] = value;
    this.enqueuePos += 1;
    this.size += 1;
  }

  dequeue() {
    if (this.size > 0) {
      delete this[this.dequeuePos];
      this.dequeuePos += 1;
      this.size -= 1;
    }
  }
}


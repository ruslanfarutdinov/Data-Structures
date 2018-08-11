class Stack {
  constructor() {
    this.size = 0;
    this.position = 0;
  }

  push(str) {
    this[this.position] = str;
    this.size += 1;
    this.position += 1;
  }
  // push(str) - O(1)

  pop() {
    if (this.size > 0) {
      this.position -= 1;
      this.size -= 1;
      delete this[this.position];
    }
  }
}
// pop() - O(1)

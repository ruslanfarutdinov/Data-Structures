// Array lists are also called Vectors, also Dynamically Resizing Array
// Even though Arrays are implemented as objects in JS and you don't need to
// worry about size and memory, ArrayLists can't really be implemented in JS (I think)
// However, I'm implementing it as if those propeties I described don't exist

class ArrayList {
  constructor() {
    this.size = 0;
    this.capacity = 1;
    this.elements = new Array(this.capacity);
  }

  checkResize() {
    if (this.size === this.capacity) {
      const biggerArr = new Array(this.capacity * 2);
      for (let i = 0; i < this.size; i += 1) {
        biggerArr[i] = this.elements[i];
      }
      this.elements = biggerArr;
      this.capacity = this.capacity * 2;
    }
  }
  // O(n) - when this does happen, it's linear time

  add(value) {
    this.checkResize();
    this.elements[this.size] = value;
    this.size += 1;
  }
  // O(1) amortized - b/c most of the time the resizing opeation doesn't happen
  // It happens when we go from 1 to 2, to 4, to 8, to 16...to X, which is 
  // 2 ops + 4 ops + 8 ops + 16 ops + ... + X ops, which is the same as
  // X + X/2 + X/4 + X/8 + ... + 1 = roughly 2X 
  // Therfore X insertions take total of O(2X) time, and SINGLE insertion is O(1).

  insert(index, value) {
    this.checkResize();
    let currIndex = this.size;
    while (index < currIndex) {
      this.elements[currIndex] = this.elements[currIndex - 1];
      currIndex -= 1;
    }
    this.elements[index] = value;
    this.size += 1;
  }
  // O(1) amortized for resizing + O(n) for shifting everything over in the worst case
  // Therefore O(n)

  set(index, value) {
    this.elements[index] = value;
  }
  // O(1)

  isEmpty() {
    return this.size === 0;
  }
  // O(1)

  remove(index) {
    for (let i = index; i < this.size; i += 1) {
      this.elements[i] = this.elements[i + 1];
    }
    this.size -= 1;
  }
  // O(n) - b/c shifting everything over is O(n) in the worst case

  // If I were implementing these in another language like C++ or Java,
  // where there are private variables, then these 2 following methods would make sense
  get(index) {
    return this.elements[index];
  }
  // O(1)

  size() {
    return this.size;
  }
  // O(1)
}

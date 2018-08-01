class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    for (let i = 0; i < this.children.length; i += 1) {
      const child = this.children[i];
      const found = child.contains(value);
      if (found) return true;
    }

    return false;
  }
}

// Time complexity of the above methods?
// addChild - O(1), note that pushing into arrays is also O(1)
// contains - O(n), since the algorithm visits each node, looking for the value

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
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

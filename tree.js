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
  // addChild - O(1), note that pushing into arrays is also O(1)

  // This contains algorithm is implemented via Depth-First Search
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

  // This contains algorithm is implemented via Breadth-First Search
  containsBFS(value) {
    if (this.value === value) return true;

    const treesWithChildren = [this];

    for (let i = 0; i < treesWithChildren.length; i += 1) {
      const tree = treesWithChildren[i];
      for (let j = 0; j < tree.children.length; j += 1) {
        const child = tree.children[j];
        if (child.value === value) {
          return true;
        }
        if (child.children.length > 0) {
          treesWithChildren.push(child);
        }
      }
    }
    return false;
  }
}
// contains - O(n), since the algorithm visits each node, looking for the value

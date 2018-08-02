// Undirected graph - symmetrical relationship between nodes

class Graph {
  constructor() {
    this.storage = [];
  }

  addNode(value) {
    this.storage.push({ value, edges: [] });
  }

  contains(value) {
    for (let i = 0; i < this.storage.length; i += 1) {
      const node = this.storage[i];
      if (node.value === value) {
        return true;
      }
    }
    return false;
  }

  removeNode(value) {
    for (let i = 0; i < this.storage.length; i += 1) {
      const node = this.storage[i];
      if (node.value === value) {
        return this.storage.splice(i, 1);
      }
    }
  }

  hasEdge(fromNode, toNode) {
    if (this.contains(fromNode)) {
      for (let i = 0; i < fromNode.edges.length; i += 1) {
        const node = fromNode.edges[i];
        if (node.value === toNode) {
          return true;
        }
      }
      return false;
    }
  }
}

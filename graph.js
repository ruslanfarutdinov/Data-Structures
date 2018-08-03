// Undirected graph - symmetrical relationship between nodes

class Graph {
  constructor() {
    this.storage = [];
  }

  addNode(value) {
    this.storage.push({ value, edges: [] });
  }

  contains(node) {
    for (let i = 0; i < this.storage.length; i += 1) {
      const currNode = this.storage[i];
      if (currNode.value === node.value) {
        return true;
      }
    }
    return false;
  }

  removeNode(node) {
    let removeNodeI;
    for (let i = 0; i < this.storage.length; i += 1) {
      const currNode = this.storage[i];
      if (currNode.value === node.value) {
        removeNodeI = i;
      }
      if (this.hasEdge(node, currNode)) {
        this.removeEdge(node, currNode);
      }
    }
    this.storage.splice(removeNodeI, 1);
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

  addEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      fromNode.edges.push(toNode);
      toNode.edges.push(fromNode);
    }
  }

  removeEdge(fromNode, toNode) {
    if (this.hasEdge(fromNode, toNode)) {
      let fromNodeI;
      let toNodeI;
      for (let i = 0; i < fromNode.edges.length; i += 1) {
        const node = fromNode.edges[i];
        if (node.value === toNode) {
          fromNodeI = i;
        }
      }
      for (let j = 0; j < toNode.edges.length; j += 1) {
        const node = toNode.edges[j];
        if (node.value === fromNode) {
          toNodeI = j;
        }
      }
      fromNode.splice(fromNodeI, 1);
      toNode.splice(toNodeI, 1);
    }
  }

  forEachNode(cb) {
    for (let i = 0; i < this.storage.length; i += 1) {
      const node = this.storage[i];
      cb(node);
    }
  }
}

// Time complexity analysis
// addNode() - O(1), because array push is O(1) since array knows where the end is and just inserts a value there
// Remember: array math = size of each slot in memory (same) * position --> gets you a specific location in memory
// contains() - O(n), b/c in the worst case the value isn't in the graph
// removeNode() - O(n^2), b/c for each iteration there are a ton of other iterations, but constant factors are dropped, so it's the same as if it were one for loop
// hasEdge() - O(n)
// addEdge() - O(n), b/c contains() is present, if it wasn't it would be O(1) - just a pushing into array operation
// removeEdge() - O(n)
// forEachNode() - O(n)

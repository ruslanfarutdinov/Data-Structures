// Undirected graph - symmetrical relationship between nodes

class Graph {
  constructor() {
    this.storage = [];
  }

  addNode(value) {
    this.storage.push({ value, edges: [] });
  }
}

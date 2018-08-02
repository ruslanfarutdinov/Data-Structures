class TrieNode {
  constructor(letter = '') {
    this.val = letter;
    this.children = {};
    this.completesStr = false;
  }
}

class Trie {
  constructor() {
    this.rootNode = new TrieNode();
  }

  insert(str) {
    let prevNode = this.rootNode;
    let string = '';
    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      if (prevNode.children[char]) {
        string += char;
        prevNode = prevNode.children[char];
      } else if (i === str.length - 1) {
        string += char;
        const newNode = new TrieNode(string);
        newNode.completesStr = true;
        prevNode.children[char] = newNode;
        prevNode = newNode;
      } else {
        string += char;
        const newNode = new TrieNode(string);
        prevNode.children[char] = newNode;
        prevNode = newNode;
      }
    }
  }

  find(str) {
    let prevNode = this.rootNode;
    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      if (!prevNode.children[char] || i === str.length - 1 && !prevNode.children[char].completesStr) {
        return false;
      }
      if (i === str.length - 1 && prevNode.children[char].completesStr) {
        return true;
      }
      prevNode = prevNode.children[char];
    }
  }
}

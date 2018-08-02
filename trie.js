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
      if (!prevNode.children[char]
          || (i === str.length - 1 && !prevNode.children[char].completesStr)) {
        return false;
      }
      if (i === str.length - 1 && prevNode.children[char].completesStr) {
        return true;
      }
      prevNode = prevNode.children[char];
    }
  }

  remove(str) {
    if (this.find(str)) {
      const nodes = [];
      let prevNode = this.rootNode;
      for (let i = 0; i < str.length; i += 1) {
        const char = str[i];
        nodes.push(prevNode.children[char]);
        prevNode = prevNode.children[char];
      }

      for (let i = str.length - 1; i >= 0; i -= 1) {
        const char = str[i + 1];
        const length = Object.keys(nodes[i].children).length;
        if (i === str.length - 1 && length > 0) {
          nodes[i].completesStr = false;
          return;
        }
        if (length > 1) {
          delete nodes[i].children[char];
          return;
        }
      }
    }
  }
}

// Time complexity
// insert() - O(n) with n as length of the string. However since most strings are going
// to be limitted in length, it's considered O(1)
// find() -  same as above
// remove() - same as above

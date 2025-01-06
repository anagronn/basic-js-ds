const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.myNode = null;
  }

  root() {
    return this.myNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.myNode) {
      this.myNode = newNode;
    } else {
      this.addNode(this.myNode, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.hasNode(this.myNode, data);
  }

  hasNode(node, data) {
    if (!node) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    if (data < node.data) {
      return this.hasNode(node.left, data);
    } else {
      return this.hasNode(node.right, data);
    }
  }

  find(data) {
    return this.findNode(this.myNode, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.myNode = this.removeNode(this.myNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data); 
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data); 
      return node;
    } else {
      if (!node.left && !node.right) {
        return null; 
      }
      if (!node.left) {
        return node.right; 
      }
      if (!node.right) {
        return node.left; 
      }

      node.data = this.minNode(node.right).data;
      node.right = this.removeNode(node.right, node.data);
      return node;
    }
  }

  min() {
    return this.minNode(this.myNode).data;
  }
  
  minNode(node) {
    if (!node.left) {
      return node; 
    }
    return this.minNode(node.left); 
  }

  max() {
    return this.maxNode(this.myNode).data;
  }

  maxNode(node) {
    if (!node.right) {
      return node; 
    }
    return this.maxNode(node.right); 
  }
}

module.exports = {
  BinarySearchTree
};
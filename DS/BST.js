// https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/
//1. BFS (level order traversal) O(V + E)  -> uses Queue data structure for finding the shortest path. BFS is better when target is closer to Source.
// DFS (O(V + E)  uses Stack data structure, DFS is better when target is far from source.)
  //- inorder
  //- preorder
  //- postorder

  
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearch {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      var newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    inorder(node) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
      }
    }
  
    preorder(node) {
      if (node !== null) {
        console.log(node.data);
        this.inorder(node.left);
        this.inorder(node.right);
      }
    }
  
    postorder(node) {
      if (node !== null) {
        this.inorder(node.left);
        this.inorder(node.right);
        console.log(node.data);
      }
    }
  
    getRootNode() {
      return this.root;
    }
  
    traverseBFS(root, value) {
      if (root !== null) {
        let collection = [root];
        while (collection.length) {
          let node = collection.shift();
          console.log(node.data);
          if (node.data === value) {
            console.log("value found"); // in case of search operation
          }
          if (node.left !== null) {
            collection.push(node.left);
          }
          if (node.right !== null) {
            collection.push(node.right);
          }
        }
      }
    }
  }
  
  var BST = new BinarySearch();
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);
  
  var root = BST.getRootNode();
  console.log(root);
  BST.traverseBFS(root, 17);
  //BST.inorder(root);
  
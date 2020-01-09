/*
binary search tree:
--> this structure preserves the relationships --> the relationship of parent and child

lookup: O(logN)
insert: O(logN)
delete: O(logN)

*/

/*
balanced vs. unbalanced tree

u
*/

class Node {
  constructor(value){
    this.eft = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null; 
  }
  
  insert(value){
    const newNode = new Node(value);
    if (this.root === null){
      this.root = newNode; 
    }else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
           
        }
      }
    }
  }
  
  lookup(value){
    
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root)) 

function traverse(node){
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}








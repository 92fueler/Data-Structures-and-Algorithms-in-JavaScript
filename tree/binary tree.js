function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}


//perfect binary tree --> every node has two children 
/*
--> half of the nodes is on the bottom level 
level 0: 2 ^ 0 = 0
level 1: 2 ^ 1 = 2
level 2: 2 ^ 2 = 4
...

--> # of nodes = 2 ^ h - 1 
log(# of nodes) = height  --> we dropped 1 here because of its insignificance. 
*/

/*
Binary search tree:

lookup: O(logN)
insert: O(logN)
delete: O(logN)
*/


//full binary tree --> node has either no child or two children 




//a linked list
/*
A linked list is a data structure in which the objects are arranged in a linear order. 
Unlike an array, however, in which the linear order is determined by the array indices, 
the order in a linked list is determined by a pointer in each object. 

Also, unlike an array, a linked list doesn't provide constant-time access to specific indices within the list.
But adding and removing items from a linked list have the constant time as the array does. 
*/

//node
/*
A node has two pieces of information:
- a pointer, or reference, to the next item in the list (for a singly linked list)
- the value of the node 
*/

function Node(value){
  return{
    value,
    next: null
  }
}

//create a list of nodes 
/*
push(value)
pop()
delete(index)
isEmpty()
printList()
*/

create LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

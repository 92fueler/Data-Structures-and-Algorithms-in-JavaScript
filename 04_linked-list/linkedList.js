//a linked list
/*
A linked list is a data structure in which the objects are arranged in a linear order. 
Unlike an array, however, in which the linear order is determined by the array indices, 
the order in a linked list is determined by a pointer in each object. 

Also, unlike an array, a linked list doesn't provide constant-time access to specific indices within the list.
But adding and removing items from a linked list have the constant time as the array does. 

数组的缺点：
1. 数组的创建通常需要申请一段连续的内存空间（一整块的内存），并且大小是固定的（大多数编程语言数组都是固定的）
所以，当当前数组不能满足容量需求的时候，需要扩容（一般情况下，申请更大的数组，比如，原来的2倍，然后将原数组的元素复制过去）
2. 而且，在数组开头或中间位置插入数据的成本很高，需要进行大量元素的位移

相对于数组的优点：
1. 内存空间不必是连续的，可以充分利用计算机的内存，实现灵活的内存动态管理
2. 链表不必在创建时就确定大小，并且大小可以无限的延伸下去
3. 链表在插入和删除数据时，时间复杂度可以达到O(1)，相对数组效率高很多

相对于数组的缺点：
1. 链表访问任何一个位置的元素时，都需要从头开始访问（无法跳过第一个元素访问任何一个元素）
2. 无法通过下标直接访问元素，需要从头一个个访问，直到找到对应的元素
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

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty(){
    return this.length === 0; 
  }
  printList(){
    const nodes = [];
    let current = this.head;
    while (current){
      nodes.push(current.value);
      current = current.next;
    }
    return nodes.join(' -> ');
  }
  push(value){
    const node = Node(value);
    if(this.head === null){
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }
  }
}






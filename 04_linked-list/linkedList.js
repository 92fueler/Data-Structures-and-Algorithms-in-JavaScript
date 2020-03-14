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

/*
methods:
append(element)
insert(position, element)
get(position)
indexOf(element)
update(position)
removeAt(position)
remove(element)
isEmpty()
toString()
*/

function LinkedList() {
  //封装节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  //property
  this.head = null;
  this.length = 0;

  //append 
  // if there is no node 
    // then append 
  // else if there are some nodes ahead 
    // previousNode.next = node and node.next = nextNode 
  this.append = function(data) {
    var newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  //toString
  // we can use this method to test the rest of the methods 
  // by printing them out 
  this.toString = function() {
    var current = this.head;
    var result = '';
    while (current) {
      result += ' ' + current.data;
      current = current.next;
    }
    return result;
  }

  this.size = function() {
    return this.length;
  }


  // insert 
  this.insert = function(position, data) {
    // if position < 0 or position > this.length 
      // return false 
      if (position < 0 || position > this.length) {
        return false;
      }

      var newNode = new Node(data);

      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        // travel to the right position
        //if position = 3, that means inserting the new node after the secondNode and before the thirdNode
          /*
            count = 0, current = head, previous = null
            count = 1, current = firstNode, previous = head 
            count = 2, current = secondNode, previous = firstNode 
            count = 3, current = thirdNode, previous = secondNode 
          */
        var count = 0; 
        var current = this.head;
        var previous = null;
        while (count < position) {
          previous = current;
          current = current.next;
          count += 1;
        }
        newNode.next = current;
        previous.next = newNode;

        this.length += 1;
        return true;
      }
  }

  //get 
  this.get = function(position) {
    //position cannot be equal to length 
    if (position < 0 || position >= this.length) {
      return null;
    }

    //if position = 3, that means getting the thirdNode 
    var current = this.head;
    var count = 0;
    while (count < position) {
      current = current.next;
      count += 1;
    }
    return current.data;
  }

  //indexOf --> input: data and return the position info 
  this.indexOf = function(data) {
    var current = this.head;
    var index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  //update --> input data & position, to update the node, return boolean value 
  this.update = function(position, newData) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    var current = this.head;
    var index = 0;
    while (index < position) {
      current = current.next;
    }
    current.data = newData;
    return true;
  }

  //remove --> input: position 
  this.remove = function(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }



    if (position === 0) {
      this.head = this.head.next;
    } else {
      var current = this.head;
      var previous = null;
      var index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index += 1;
      }
      previous.next = current.next;
      delete current;
      this.length -= 1;
      return true;
  
    }

  }

}




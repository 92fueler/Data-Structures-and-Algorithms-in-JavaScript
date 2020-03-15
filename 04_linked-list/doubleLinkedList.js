/*
single linked list:
只能从头遍历到尾 或者 从尾遍历到头 （一般是前者）
实现的原理是：上一个链表中有一个指向下一个的作用

缺点：我们可以轻松达到下一个节点，但是回到前一个节点是很难的。
举一个例子：
假设一个文本编辑用链表来存储文本，每行一个String对象存储在链表的一个节点中，
当编辑器用户向下移动光标时，链表直接操作到下一个节点即可。
但是，当用于将光标向上移动呢？
这个时候为了回到上一个节点，我们可能需要从First开始，一次走到想要的节点上。

double linked list:
可以解决单项链表的缺点
实现原理：一个节点既有向前连接的引用，也有一个向后连接的引用

*/

function DoublyLinkedList() {
    
    //properties 
    this.head = null;
    this.tail = null;
    this.length = 0;

    //内部类
    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    //方法封装
    /*
    append(element)
    insert(position, element)
    get（position)
    indexOf(element)
    update(position, element)
    removeAt(position)
    remove(element)
    isEmpty()
    size()
    toString() 让其只输出元素的值
    forwardString() 返回正向遍历的节点字符串形式
    backwardString() 返回反向遍历的节点字符串形式
    */

    //isEmpty() 
    this.isEmpty = function(){
        return this.length === 0;
    }

    this.size = function() {
        return this.length;
    }




    //append 
    this.append = function(data) {
        //if there is no node 
            //then append 
        //else there are some node, update the tail 
            //then append 

        var newNode = new Node(data);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    this.toString = function() {
        return this.backwardString();
    }

    this.forwardString = function() {
        var result = '';
        var current = this.tail;
        while (current) {
            result += current.data + ' ';
            current = current.prev;
        }
        return result;
    }

    //从前向后遍历
    this.backwardString = function() {
        var result = '';
        var current = this.head;
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        return result;
    }

    this.insert = function(position, data) {
        //有position就有越界判断
        if (position < 0 || position > this.length) {
            return false;
        }

        var newNode = new Node(data);
        //if there is no node at all 
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if　(position === 0) {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else if (position === this.length) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            } else {
                //if position = 2, that means inserting node after the first node and before the second node 
                var current = this.head;
                var index = 0;
                while (index < position) {
                    current = current.next;
                    index += 1;
                }
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
            }
        }
        this.length += 1;
    }

    this.get = function(position){
        if (position < 0 || position >= this.length) {
            return null;
        }
        var index = 0; 
        var current = this.head;
        while (index < position) {
            current = current.next;
            index += 1;
        }
        return current.data;
    }
}


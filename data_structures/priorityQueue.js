/*
实现优先级队列相对于队列主要有两方面想要考虑：
1. 封装元素和优先级放在一起（可以封装一个新的构造函数）
2. 添加元素时，将新插入元素的优先级和队列中已经存在的元素优先级进行比较，已获得自己证券的位置。

*/

function PriorityQueue() { 
    //重新创建了一个类，可以称为：内部类 
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    //properity 
    this.items = [];

    //insert 
    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        //if there is no eleent in the queue 
            //then insert 
        //if there are some elements in the queue 
            //then compare the priority 
        
        if (this.items.length === 0) {
            this.items.push(queueElement);
        } else {
            var added = false;

            for (var i = 0; i < this.length; i++) {
                if (queueElement.priority < this.items[i]) {
                    this.items.splice(i, 0);
                    added = true; 
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement);
            }
        }
    }

    this.dequeue = function() {
        return this.items.shift();
    }


    this.peek = function() {
        return this.items[0];
    }

    this.isEmpty = function() {
        return this.items.length === 0;
    }

    this.size = function() {
        return this.items.length;
    }

    this.toString = function() {
        var result = '';
        for (var i = 0; i < this.items.length; i++) {
            result += this.items[i].element + '-' + this.items[i].priority + ' ';
        }
        return result;
    }

}
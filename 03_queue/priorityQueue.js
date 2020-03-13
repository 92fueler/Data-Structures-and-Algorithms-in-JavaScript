function PriorityQueue() {
    
    //重新创建了一个雷，可以称为：内部类 
    function QueueElement() {
        this.element = element;
        this.priority = priority;
    }

    //properity 
    this.items = [];

    //insert 
    this.queue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
    }
}
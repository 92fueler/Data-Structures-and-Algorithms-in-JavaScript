class Queue {
    constructor(){
        this.items = [];

        //methods
        this.enqueue = function(element) {
            this.items.push(element);
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
    }
}
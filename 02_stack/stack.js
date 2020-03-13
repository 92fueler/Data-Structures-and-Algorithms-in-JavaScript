
class Stack {
    constructor() {
        //property;
        this.items = [];
        //methods:
        //push 
        this.push = function (element) {
            this.items.push(element);
        };
        //pop 
        this.pop = function () {
            return this.items.pop();
        };
        //peek --> return the top element 
        this.peek = function () {
            return this.items[this.items.length - 1];
        };
        //isEmpty 
        this.isEmpty = function () {
            return this.items.length === 0;
        };
        //size 
        this.size = function () {
            return this.items.length;
        };
        //clear --> remove all the elements 
        this.clear = function () {
            return this.items = [];
        };
        this.toString = function () {
            var stringStack = '';
            for (var i = 0; i < this.items.length; i++) {
                stringStack += items[i].toString;
            }
            return stringStack;
        };
    }
}

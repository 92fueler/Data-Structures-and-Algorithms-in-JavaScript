class Stack {
    constructor() {
        /*
        Here it's bettern to set items as the private variable;
        otherwise, the items property of an instance can be edited by 
        directly assining the value to stack.items, rather than using 
        the methods to alter the items. 
        */
        // this.items = [];
        var items = [];

        //methods:
        //push 
        this.push = function (element) {
            items.push(element); // return is not needed here
        };
        //pop 
        this.pop = function () {
            return items.pop();
        };
        //peek --> return the top element 
        this.peek = function () {
            return items[items.length - 1];
        };
        //isEmpty 
        this.isEmpty = function () {
            return items.length === 0;
        };
        //size 
        this.size = function () {
            return items.length;
        };
        //clear --> remove all the elements 
        this.clear = function () {
            return items = [];
        };
        this.toString = function () {
            if (this.isEmpty === true) {
                return 'this is an empty stack'
            } else {
                var stringStack = '';
                for (var i = 0; i < items.length; i++) {
                    stringStack += items[i].toString() + ' ';
                }
                return stringStack;
            };
        }
    }
}
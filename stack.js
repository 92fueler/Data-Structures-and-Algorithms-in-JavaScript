//stack
/*
FIFO 
JS doesn't provide a native stack data structure but we can build it with an array and a closure or a class. 

methods:
push()
pop()
peek()
get length()
isEmpty()
*/

//buid stack with array and class 
class MyStack1{
  constructor(){
    this.stack = [];
  }
  push(item){
    return this.stack.push(item);
  }
  pop(){
    return this.stack.pop();
  }
  peek(){
    return this.stack[this.length - 1];//here is this.length not stack.length
  }
  get length(){
    return this.stack.length;
  }
  isEmpty(){
    return this.stack.length === 0;
  }
}

let myStack1 = new MyStack1();
myStack1.push('apple');
myStack1.push('banana');
myStack1.push('peach');
console.log(myStack1.length);
console.log(myStack1.peek());
myStack1.pop();
myStack1.pop();
myStack1.pop();
console.log(myStack1.isEmpty());



//build stack with array and closure 
function myStack2(){
  const stack = [];
  return{
    push(item){
      return stack.push(item);
    },
    pop(){
      return stack.pop();
    },
    peek(){
      return stack[this.length - 1];
    },
    get length(){
      return stack.length;
    },
    isEmpty(){
      return this.length === 0;
    }
  }
}



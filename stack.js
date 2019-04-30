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
    return this.stack(stack.length - 1);
  }
  get length(){
    return this.stack.length;
  }
  isEmpty(){
    return stack.length === 0;
  }
}

//build stack with array and closure 
function myStack2(){
  const stack = [];
  return{
    push(item){
      return stack.push(item);
    }
    pop(){
      return stack.pop();
    }
    peek(){
      return stack[stack.length - 1];
    }
    get length(){
      return stack.length
    }
    isEmpty(){
      return stack.length === 0;
    }
}


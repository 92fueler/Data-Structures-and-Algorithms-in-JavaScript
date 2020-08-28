/**
 * Array implementation using Map 
 * 
 * JS built-in array can be used to create array, such as 
 * const arr = [] or const arr = new Array(10);
 * 
 * Here, I want to use object to build an array for fun with some interesting methods.
 * Don't forget array is an object in JavaScript. 
 * 
 * properties: 
 * 1. length 
 * 2. data 
 * 
 * methods:
 * // lookup 
 * head(): get the first element of array 
 * last(): get the last element of array
 * nth(num): get the nth element of array
 * indexOf(value): get the index at which the first occurrence of value is found in array
 * lastIndexOf(value): get the index at which the last occurence of value is found in array
 *  
 * // adding elements 
 * push(value): insert an element at the end of array
 * unshift(value): insert an element at the beginning of array
 * 
 * // mutating 
 * reverse(): reverse the array 
 * 
 * // deleting elements 
 * pop(): remove the element at the end of array
 * shift(): remove the element at the beginning of array
 * deleteByIndex(index): remove an item by index position
 * 
 * // printing
 * toString(): 
 */

class MyArray {
  constructor(){
    this.length = 0;
    this.data = new Map();
  }

  //head()
  head() {
    if (this.length <= 0) {
      return -1;
    } else {
      return this.data.get(0);
    }
  }

  // last()
  last() {
    if (this.length <= 0) {
      return -1;
    } else {
      return this.data.get(this.length - 1);
    }
  }

  // nth(num)
  nth(num) {
    if (num > this.length - 1 || num < 0) {
      return -1;
    } else if (num === 0) {
      this.head();
    } else if (num === this.length - 1) {
      this.last();
    } else {
      return this.data.get(num);
    }
  }

  // push()
  push(value) {
    this.data.set(this.length, value);
    this.length += 1;
  }

  // unshift(value)
  unshift(value) {
    
  }

  toString() {
    this.data.forEach((value, key) => {
      console.log(`${key} => ${value}`);
    })
  }
};

let arr = new MyArray();
arr.push(11);
arr.push(22);
arr.push(33);
arr.push(44);
arr.push(55);
arr.toString();
// console.log(arr.head()); // 11
// console.log(arr.last()); // 55
console.log(arr.nth(0)); // 11


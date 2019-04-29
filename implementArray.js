//create an array 

//of course, we can create an array as below: 
const a = [];

//but here we want to use class to create it. 
//remeber array is an object with indexing starting from 0 to the length - 1
class MyArray {
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length] = item;
    this.length++
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index){
    for (let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
};

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
console.log(newArray);


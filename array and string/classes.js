/*
1. reference type
2. context
3. instantiation
*/

//1. reference type
[] === []; //false 

[1] === [1]; //false 

var object1 =  { value: 10 }; 
var object2 = object1;
var object3 = { value: 10 }; 

object1 === object2; //true 
object1 === object3; //false 

//This is because object is the reference type not the primitive type.

//2. context 

/*
Scope is created when it sees curly brackets. 
Context tells you where we are within the object.
*/

function b(){
  let a = 1; 
}

console.log(a); //Uncaught reference error 

console.log(this); //window --> this means what is the object environment that we are in right now 
console.log(this === window); //true 

//3. instantiation --> making multiple instances 
class Player{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce(){ //a method 
    console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
  }
}

class Wizard extends Player{
  constructor(name, type){
    super(name, type)
  }
  play(){
   console.log(`WEEEEEE I'm a ${this.type}`);
  }
}
/*
Every time we use extend, we have to call the constructor function 
*/

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
//new --> create a new instance 
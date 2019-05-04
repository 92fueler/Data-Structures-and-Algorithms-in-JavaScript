//object in JS 

/*
objects and arrays are no different, but have a little more complex data structure. 
They can be visualized as containers for other datatypes in JS. 

Object values come in key: value pairs and these values acan either be properties of the object 
or methods (functions). Properties are features or attributes of the object, whereas methods are 
functions or actions that can be performed on the object. 

Basically, almost everything in JS is an Object. 
For this reason, JS is seen as an object-oriented language by many.  
In the brower, once a window loads, an insntance of the Document object is created and every other 
thing displayed on the brower is a child of the document object and document methods are 
used to manipulate the parent object. 

*/

var user = {
  name: 'John',
  age: 34, 
  hobby: 'Soccer',
  isMarried: false 
}

/*
If we compare objects with arrays, 
array is the index-based, but object is property-based. Very similar. 
*/

var user = {
  1: 'John',
  2: 34,
  3: 'Soccer',
  4: false
}

var list = [
  {
  username: 'andy',
  password: 'secre'
  },
  {
  username: 'jess',
  password: '123'
  }
]


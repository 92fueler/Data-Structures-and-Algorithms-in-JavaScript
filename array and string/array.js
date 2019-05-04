//array 

/*
lookup  o(1)
push  o(1)
insert  o(n)
delete  o(n)
*/

const strings = ['a', 'b', 'c', 'd'];

//if it's 32-bit storage, this array takes 4 * 4 = 16 bytes of storage 

//push - insert at the end of the array 
strings.push('e');

//pop - delete from the end of the array 
strings.pop();

//unshift - insert at the beginning of the array 
strings.unshift('0'); //o(n) --> why not o(1)? 

//shift - delete at the beginning of the array 
strings.shift(); 

//splice - join the ends of two pieces of array to be a new array 
strings.splice(2, 0, 'alien'); //o(n) 

//object in JavaScript is hash table

//the most common interview questions are about hash table. 


/*
hash function 
idempotent 

key-value --> can be any types in JS 
key can be functions, numbers and so on too. 
In JS, it will be strintified to the strings stored in the object.

However, ES6, we have Map and Set 
const a = new Map()
const b = new Sets() 




lookup --> o(1) 
insert --> o(1)
delete --> o(1)
search --> o(1) 


hash collision 
--> limited space and lots of data --> cannot avoid collision 

pros:
1. fast lookup --> good collision resolution 
  (however, we don't need to worry about this, because our programming lanuages in computer underneath the hood take 
  care of it for us)
2. fast inserts --> depends on the type of hash tables such as maps in JS 
3. flexible keys 

cons:
1. unordered --> hard to go through everything in order 
2. slow key iteration 



*/


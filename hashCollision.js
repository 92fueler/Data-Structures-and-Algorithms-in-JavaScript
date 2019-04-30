//hash collision

/*
insert  o(1)
lookup  o(1)
delete  o(1)
search  o(1)
*/

//hash table in JS is an object. 

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log('ahaha');
  }
}
usesr.age;//access --> o(1)
user.spell = 'abra kada';//insert --> o(1)
user.scream();//o(1)

//What's the main problem using hash table? --> hash collision
/*
while we create the hash table, the memory assign the space for us, not the all the space the memory has 
but just a little bit of it. 
hash collision means assigning keys into the same address since assigning is random-based. 
with enough data and limited memory we cannot avoid the collision. 
when we have collision, it slows reading and writing. 


The hash function will depend on the range of key values and the number of buckets. 
The idea is to try to assign the key to the bucket as uniform as you can. Ideally, a perfect hash function will 
be one-one mapping between the key and the bucket. 
However, in most cases a hash function is not perfect and it's a tradeoff between the amount of buckets 
and the capacity of a bucket. 

There are different ways to solve the collision.


*/



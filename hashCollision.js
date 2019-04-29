//hash collision

/*
insert  o(1)
lookup  o(1)
delete  o(1)
search  o(1)
*/

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log('ahaha');
  }
}
usesr.age;//o(1)
user.spell = 'abra kada';//o(1)
user.scream();//o(1)

//hash collision

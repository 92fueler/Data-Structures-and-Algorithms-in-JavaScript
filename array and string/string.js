//strings are very similar as arrays but filled with all characters 

//can you create a function to reverse a string? 
//such as: 'Hi My name is Jean'
//convert string to array 

function reverse(str){
  //check input
  if(!str || str.length < 2 || typeof str !== 'string'){
     return 'hmm that is not good!';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  //console.log(backwards);
  return backwards.join('');
}  

reverse('Hi My name is Andrei');

//what if we use some built-in methods from JS 
function reverse2(str){
  return str.split('').reverse().join('');
}

//what if we use ES6 syntax 
const reverse3 = str => str.split('').reverse().join('');

//or 
const reverse4 = str => [...str].reverse().join('');

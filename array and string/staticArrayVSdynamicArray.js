//static array vs dynamic array

//static array --> the size is fixed --> you have to specify the size ahead of time 

//dynamic array 
/*
It allows us to copy and rebuild the array at a new location which with more memory 
if we want more memory. 
*/

/*
dynamic array 
lookup o(1)
append o(1) --> can be o(n) --> loop over the array and copy those elements to a new place and append one element to it
insert o(n)
delete o(n)
*/

//c++ --> you have to assign memory ahead of time. 
int a[10];
int b[5] {1, 2, 3, 4, 5}


/*
In JS and other languages like Python where you have lists and array list in Java,they work like dynamic arrays. 
They automatically allocate memory according to the increase in size of the array. 
*/

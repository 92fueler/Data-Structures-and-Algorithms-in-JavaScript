//insertion sort 


//How to think of this algorithm?
/*
The way it works is that it splits the array into two sections - a sorted and an unsorted one. 
And, we start our sorted section at the first item --> an array of a single item is sorted for sure. 

insertion means insert one item from the unsorted section into the sorted section. 
*/

//running time
/*
theta(n^2) 
*/

/*
given a sorted array arr = [1, 2, 5, 9] and a value val = 4
write a program to insert the value into the sorted array.
*/

let array = [1, 2, 5, 9];
const value = 4;

function sorting(arr, val){
  arr.push(val); 
  for(let i = arr.length - 2; i >= 0; i--){
    if(arr[i] > val){
      arr[i + 1] = arr[i];
      arr[i] = val;
    }
  }
  return arr;
}

//CONTINUE 
/*
Now, the sorted section is dynamic, which means it starts from one item and increments by one item from the unsorted section. 
*/

function insertionSorting(arr){
  let sortedArr = [];
  sortedArr.push(arr[0]); //sortedArr has one item 
  for(let i = 1; i < arr.length; i++){
    sortedArr.push(arr[i]);
    for(let j = sortedArr.length - 2; j >= 0; j--){
     if (sortedArr[j] > arr[i]){
      sortedArr[j + 1] = sortedArr[j];
      sortedArr[j] = arr[i];
    }
   }
  }
  console.log(arr);
  return sortedArr;
}

const list =  [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(insertionSorting(list));
 

//The program as above works well. but the problem is that it creates a new array, which means more memory space is required. 

//how to improve? moving around the items within the given array 

//CONTINUE 

//The below is the qesudocode from CLRS 
//insertion sorting is not about swapping, It's about inserting. 

/*
INSERTION-SORT(A)
for j = 2 to A.length
  key = A[j] //inert A[j] into the sorted sequence A[1 ... j-1]
  i = j - 1
  while i > 0 and A[i] > key
    A[i + 1] = A[i]
    i = i - 1
  A[i + 1] = key 
*/

/*
Time complexity: 
comparison and swaping for numbers have exactly the same cost. 
But if you had a record and you were comparing records, and the comparison function that you used for the records 
was in itself a method call or a subroutine, it's quite possible that all you're doing is swaping pointers or 
references to do the swap, but the comparison could be subtantially more expensive. 
*/

function insertionSort(arr){
  for (let j = 1; j < arr.length; j++){
    let key = arr[j];
    let i = j - 1;
    while(i > -1 && arr[i] > key){
     arr[i + 1] = arr[i];
     i--;
    }
    arr[i + 1] = key;
  }
 return arr;
} 

const list =  [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(insertionSort(list));

/*
What if we do the binary search on the sorted section? 
It's called insertion binary sort. 

*/





//insertion sort 

//How to think of this algorithm?
/*
The way it works is that it splits the array into two sections - a sorted and an unsorted one. 
And, we start our sorted section at the first item --> an array of a single item is sorted for sure. 

insertion means insert one item from the unsorted section into the sorted section. 
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

/*
INSERTION-SORT(A)
for i = 1 to A.length
  val = A[i] //insert A[i] into the sorted sequence A[1, ..., i-1] + A[i] 
  j = i - 1; //sorted section 
  while j > 0 and A[j] > val
    A[j + 1] = A[j]
    j = j - 1
  A[j + 1] = val
*/

function insertionSort(arr){
 for (let i = 1; i > arr.length; i++){
  let val = arr[i];
  let j = i - 1;
  while( j >= 0 && arr[j] > val){
   arr[j + 1] = arr[j];
   j--;
  }
  arr[j] = val;
 }
 return arr;
}

const list =  [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(insertionSort(list));






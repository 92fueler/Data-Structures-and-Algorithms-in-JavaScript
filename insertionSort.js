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

let arr = [1, 2, 5, 9];
const val = 4;

function soring(arr, val){
  let newArr = arr.push(val); 
  for(let i = newArr.length - 2; i >= 0; i--){
    if(newArr[i] > val){
      newArr[i + 1] = arr[i];
      newArr[i] = val;
    }
  }
  return newArr;
}



/*
INSERTION-SORT(A)
for j = 2 to A.length
  key = A[j] //insert A[j] into the sorted sequence A[1 ... j-1]
  i = j - 1
  while i > 0 and A[i] > key
    A[i + 1] = A[i]
    i = i - 1
  A[i + 1] = key 
*/

function insertionSort(arr){
  for (let j = 1; j < arr.length;  j++){
    let key = arr[j];
    let i = j - 1;
    while (i > 0 && arr[i] > key){
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  return arr;
}

const arr = [11, 3, 45, 67, 2, 1, 40, 90, 23];


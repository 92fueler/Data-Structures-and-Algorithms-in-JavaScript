//quick sort 
/*
Quicksort, like merge sort, applies the divide-and-conquer paradigm. 

QUICKSORT(A, p, r){
  if p < r
    q = PARTITION(A, p, r)
    QUICKSORT(A, p, r)
    QUICKSORT(A, q + 1, r) 
}

PARTITION(A, p, r){
  x = A[r]
  i = p -1
  for j = p to r - 1
    if A[j] <= x 
      i = i + 1
      exchange A[i] with A[j]
  exchange A[i + 1] with A[r] 
  return i + 1 
}
*/

function quickSort(arr, p, r){
  if(p < r){
  q = partition(arr, p, r);
  quickSort(arr, p, r);
  quickSort(arr, q + 1, r); 
 }
}

function partition(arr, p, r){
  let x = arr[r];
  let i = p - 1; 
  for (let j = p; j < r; j++){
    if(arr[j] <= x){
      i++
      let temp;
      arr[i] = temp;
      arr[i] = arr[j];
      arr[j] = temp; 
    }
  }
 let temp1;
 arr[i + 1] = temp1; 
 arr[i + 1] = arr[j];
 arr[j] = temp1;
 return i + 1;
}

var arr = [ 2, 8, 7, 1, 3, 5, 6, 4];
var p = 10, r = 17; 

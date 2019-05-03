//insertion sort 

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

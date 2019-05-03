//binary search 

/*
searching technique which works on divide and conquer approach 
only used in a sorted array 

time complexity: o(lgn) 
*/

/*
find the midpoint of the array --> divide 
compare the target value with the midpoint 
if target value > midpoint, remove the left side of array and search on the right side 
else if target value < midpoint, remove the right side and search on the left side 
else target value = midpoint. 
repeat the if-else if -else again till the target value is found 
*/

const arr = [1, 20, 34, 57, 88, 103, 390, 456, 761, 890, 903];
const target = 88;

function binarySearch(arr, startIndex, endIndex, target){
  let startIndex = 0;
  let endIndex = arr.length - 1;
  
  while(startIndex < endIndex){
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[midIndex]){
      return console.log('target was found at index ') + midIndex;
    }
    if(target > arr[midIndex]){
      binarySearch(arr, midIndex + 1, endIndex, target);
    }
    if(target < arr[midIndex]){
      binarySearch(arr, startIndex, midIndex - 1, target);
    }
  }
}

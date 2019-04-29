//merge two arrays into one sorted array 

function mergeSortedArray(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = i;
  let j = 1;
  
  //check input 
  if(array1.length === 0){
    return array2;  
  }
  if(array2.length === 0){
    return array1;
  }
  
  while (array1Item || array2Item){
    console.log(array1Item, array2Item);
    if(!array1Item || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = array1[1];
      i++;
    }
  }else{
    mergedArray.push(array2Item);
    array2Item = array2[j];
    j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

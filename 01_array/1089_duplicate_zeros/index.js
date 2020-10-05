/**
 * Given a fixed length array 'arr' of integers, 
 * duplicate each occurrence of zero, shifting the remaining elements to the right.
 * 
 * Note that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place, do not return anything from yoru function.
 */

var duplicateZeros = function (arr) {
  if (arr.filter(item => item === 0).length === 0) {
    return -1;
  }
  
}

module.exports = duplicateZeros;
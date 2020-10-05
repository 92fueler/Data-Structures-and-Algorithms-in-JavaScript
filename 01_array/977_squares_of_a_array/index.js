/**
 * Given an array of integers A sorted in non-decreasing order, 
 * return an array of the squares of each number, also in sorted non-decreasing order.
 */

/**
 * 
 * @param {number[]} A 
 * @return {number[]}
 */ 

// solution 1: using JavaScript compare function 
var sortedSquares1 = function (A) {
  A = A.map(item => item * item)
  A.sort((a, b) => a - b)
  return A;
}


module.exports = {
  sortedSquares1
}
/**
 * Given a binary array, find the maximum number of consecutive 1s in this array
 * 
 * timestamp:
 * first written: 10/01/2020
 */

/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
// step 1: clarification
/*
1. what is the binary array? 
*/

// step 2: possible solutions
/*
1. window pattern with two pointers 
*/
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      count = 0;
    }
    maxCount = maxCount > count ? maxCount : count;
  }
  return maxCount;
}

module.exports = findMaxConsecutiveOnes;
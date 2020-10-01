/**
 * Given an array, rotate the array to the right by k steps, 
 * where k is non-negative. 
 * 
 * There are at least 3 different ways to solve this problem. 
 * 
 * Example 1: 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * 
 * Example 2: 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

// CLARIFICATION 
/*
1. Can I use extra array space? 
2. 
*/

// POSSIBLE SOLUTIONS 
// 1. JS array methods 
// 2. 

/**
 * 
 * @param {number[]} nums 
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead 
 */

// approach 1
const rotate1 = function (nums, k) {
  if (k <= 0 || nums.length <= k) return nums;
  let temp = nums.splice(-k);
  return temp.concat(nums);
}

// approach 2
const rotate2 = function (nums, k) {
  if (k <= 0 || nums.length <= k) return nums;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

module.exports = {
  rotate1,
  rotate2
}
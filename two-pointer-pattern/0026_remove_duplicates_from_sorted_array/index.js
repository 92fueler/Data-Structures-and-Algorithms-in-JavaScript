/**
 * Given a sorted array nums, 
 * remove the duplicates in-place such that each element appear only once and return the new length.
 * 
 * Don't allocate extra space for another array, 
 * you must do this by modifying the input array in-place with o(1) extra memory.
 * 
 * timestamp:
 * review: 10/04/2020
 */

// CLARIFICATION
// Confusued why the returned value is an interger not an array? 

// FUNCTION DEFINITION
// approach: two pointer: anchor and explorer
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let anchor = 0; 
  for (let explorer = 0; explorer < nums.length; explorer++) {
    if (nums[explorer] !== nums[anchor]) {
      anchor += 1;
      nums[anchor] = nums[explorer];
    }
  }
  return anchor + 1;
}

module.exports = removeDuplicates;

// // ASSERTION FUNCTION TO BE USED 
// function assertEqual(actual, expected, testName) {
//   var successMsg = `Passed [${testName}]`;
//   var failureMsg = `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
//   if (actual === expected) {
//     console.log(successMsg);
//   } else {
//     console.log(failureMsg);
//   }
// }

// // TEST1 
// var nums1 = [1, 1, 2];
// var actual1 = removeDuplicates(nums1);
// assertEqual(actual1, 2, "should remove duplicates in-place in a sorted array nums");

// // TEST2 
// var nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// var actual2 = removeDuplicates(nums2);
// assertEqual(actual2, 5, "should remove duplicates in-place in a sorted array nums");

/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * 
 * Timestamp:
 * first written: 10/01/2020
 */

var findNumbers = function (nums) {
  return (
    nums.filter(item => {
      return (
        item.toString().length % 2 === 0
      )
    })
  ).length;
}

module.exports = findNumbers;
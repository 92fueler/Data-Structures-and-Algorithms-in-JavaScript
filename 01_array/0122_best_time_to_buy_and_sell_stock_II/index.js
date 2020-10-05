/**
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

timestamp: 
written: 10/04/2020

 */

// 

// FUNCTION DEFINITION
// approach 1 
var maxProfit1 = function (prices) {
  if (prices.length <= 1) return 0;
  let total = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1];
    }
  }
  return total;
}

module.exports = {
  maxProfit1
};
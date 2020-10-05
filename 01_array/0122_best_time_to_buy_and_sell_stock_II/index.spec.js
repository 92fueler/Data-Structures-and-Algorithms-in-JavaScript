const {maxProfit1 } = require('./index');

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

test('given an array of prices, find the maximum profit', () => {
  expect(maxProfit1(prices1)).toBe(7)
});

test('given an array of prices, find the maximum profit', () => {
  expect(maxProfit1(prices2)).toBe(4)
});

test('given an array of prices, find the maximum profit', () => {
  expect(maxProfit1(prices3)).toBe(0)
});


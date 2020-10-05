const { sortedSquares1 } = require('./index');

const A1 = [-4, -1, 0, 3, 10];
const A2 = [-7, -3, 2, 3, 11];

test('return an array of the squares of each number in sorted non-descreasing order', () => {
  expect(sortedSquares1(A1)).toEqual([0, 1, 9, 16, 100])
});

test('return an array of the squares of each number in sorted non-descreasing order', () => {
  expect(sortedSquares1(A2)).toEqual([4, 9, 9, 49, 121])
});
var findNumbers = require('./index');

const nums1 = [12, 345, , 2, 6, 7896];
const nums2 = [555, 901, 482, 1771];

test('find numbers with even number of digits', () => {
  expect(findNumbers(nums1)).toBe(2);
});


test('find numbers with even number of digits', () => {
  expect(findNumbers(nums2)).toBe(1);
});
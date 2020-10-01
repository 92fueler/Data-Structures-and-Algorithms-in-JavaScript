const { rotate1, rotate2} = require('./index')

const nums1 = [1, 2, 3, 4, 5, 6, 7], k1 = 3;
const nums2 = [-1, -100, 3, 99], k2 = 2;

test('rotate the given array to the right by k steps', () => {
  expect(rotate1(nums1, k1)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('rotate the given array to the right by k steps', () => {
  expect(rotate1(nums2, k2)).toEqual([3, 99, -1, -100])
})

test('rotate the given array to the right by k steps', () => {
  expect(rotate2(nums1, k1)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('rotate the given array to the right by k steps', () => {
  expect(rotate2(nums2, k2)).toEqual([3, 99, -1, -100])
})
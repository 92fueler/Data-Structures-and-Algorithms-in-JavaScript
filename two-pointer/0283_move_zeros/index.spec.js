const moveZeros = require('./index')

const nums1 = [0, 1, 0, 3, 12];
const nums2 = [0];
const nums3 = [0, 0, 3, 4, 5, 0, 0, 0, 1, 2, 3];

test('move zeros in-place to the end of the array', () => {
  expect(moveZeros(nums1)).toEqual([1, 3, 12, 0, 0])
})

test('move zeros in-place to the end of the array', () => {
  expect(moveZeros(nums2)).toEqual([0])
})

test('move zeros in-place to the end of the array', () => {
  expect(moveZeros(nums3)).toEqual([3, 4, 5, 1, 2, 3, 0, 0, 0, 0, 0])
})

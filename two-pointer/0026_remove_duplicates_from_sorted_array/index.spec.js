const removeDuplicates = require('./index')

const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

test('remove duplicates in-place in a sorted array nums', () => {
  expect(removeDuplicates(nums1)).toBe(2)
})

test('remove duplicates in-place in a sorted array nums', () => {
  expect(removeDuplicates(nums2)).toBe(5)
})

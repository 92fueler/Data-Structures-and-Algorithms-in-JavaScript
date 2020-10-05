var findMaxConsecutiveOnes = require('./index');

const nums1 = [0]
const nums2 = [1, 1, 0, 1, 1, 1]

test('find max consecutive ones in a binary array', () => {
  expect(findMaxConsecutiveOnes(nums1)).toBe(0);
});

test('find max consecutive ones in a binary array', () => {
  expect(findMaxConsecutiveOnes(nums2)).toBe(3);
});

const plusOne = require('./index')

const digits1 = [1, 2, 3]
const digits2 = [9]

test('plus one to the original digits', () => {
  expect(plusOne(digits1)).toEqual([1, 2, 4])
})

test('plus one to the original digits', () => {
  expect(plusOne(digits2)).toEqual([1, 0])
})




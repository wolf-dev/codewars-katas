const converter = require('./index.js')

test('Test 1', () => {
  expect(converter(10)).toBe(3.54)
})

test('Test 1', () => {
  expect(converter(20)).toBe(7.08)
})

test('Test 1', () => {
  expect(converter(30)).toBe(10.62)
})

// calculator.test.js

const { add, subtract } = require('./calculator');

test('adds two numbers', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 1, b: 1, action: Action.Subtract, expected: 0 },
  { a: 10, b: 7, action: Action.Subtract, expected: 3 },
  { a: 29, b: 17, action: Action.Subtract, expected: 12 },
  { a: 8, b: 5, action: Action.Multiply, expected: 40 },
  { a: 0, b: 6, action: Action.Multiply, expected: 0 },
  { a: 7, b: 29, action: Action.Multiply, expected: 203 },
  { a: 169, b: 13, action: Action.Divide, expected: 13 },
  { a: 49, b: 7, action: Action.Divide, expected: 7 },
  { a: 29, b: 29, action: Action.Divide, expected: 1 },
  { a: 2, b: 10, action: Action.Exponentiate, expected: 1024 },
  { a: 1, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 13, b: 2, action: Action.Exponentiate, expected: 169 },
  { a: 13, b: 0, action: 'unknow', expected: null },
  { a: 13, b: 5, action: undefined, expected: null },
  { a: 13, b: '5', action: Action.Exponentiate, expected: null },
  { a: 13, b: undefined, action: Action.Exponentiate, expected: null },
    // continue cases for other actions    
];



describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test('should blah-blah', () => {
    testCases.forEach((item) => {
      const { a, b, action, expected } = item;
      const result = simpleCalculator({ a: a, b: b, action: action });
      if (expected === null) {
        expect(result).toBeNull();
      } else {
        expect(result).toEqual(expected);
      }
    });
  });
  // Consider to use Jest table tests API to test all cases above
});

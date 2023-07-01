// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
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

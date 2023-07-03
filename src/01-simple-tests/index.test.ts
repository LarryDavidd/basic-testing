// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Add })).toBe(10);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 9, b: 4, action: Action.Subtract })).toBe(5);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 13, b: 7, action: Action.Multiply })).toBe(91);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 169, b: 13, action: Action.Divide })).toBe(13);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(8);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: undefined })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 100, b: '5', action: Action.Add })).toBeNull();
  });
});

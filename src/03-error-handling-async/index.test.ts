// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue('something')).resolves.toEqual('something');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect((): void => { throwError('error!'); }).toThrow(new Error('error!'));
  });

  test('should throw error with default message if message is not provided', () => {
    expect((): void => { throwError(); }).toThrow(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => { throwCustomError(); }).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(new MyAwesomeError());
  });
});

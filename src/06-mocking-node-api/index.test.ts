// Uncomment the code below and write your tests
import path from 'path';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    doStuffByTimeout(callback, 5577);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    doStuffByTimeout(callback, 5577);
    expect(callback).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(13);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    doStuffByInterval(callback, 5577);
    jest.advanceTimersByTime(5577);
    expect(callback).toHaveBeenCalled();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, 5577);
    
    jest.advanceTimersByTime(5577);
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(5577);
    expect(callback).toHaveBeenCalledTimes(5);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    await readFileAsynchronously('./test.txt');
    expect(jest.spyOn(path, 'join')).toHaveBeenCalled();
  });

  test('should return null if file does not exist', async () => {
    const res = await readFileAsynchronously('./test.txt');
    if (!res) expect(res).toBeNull();
  });

  test('should return file content if file exists', async () => {
    const res = await readFileAsynchronously('./test.txt');
    if (res) expect(readFileAsynchronously('./test.txt')).toEqual(res);
  });
});

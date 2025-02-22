// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule = jest.requireActual<typeof import('./index')>('./index');
  console.log(originalModule);
  return {
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne();
    mockTwo();
    mockThree();
    expect(jest.spyOn(console, 'log')).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    unmockedFunction();
    expect(jest.spyOn(console, 'log')).toHaveBeenCalledWith('I am not mocked');
  });
});

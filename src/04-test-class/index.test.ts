// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(113).getBalance()).toBe(113);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(113).withdraw(127)).toThrow( InsufficientFundsError, );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => getBankAccount(113).transfer(127, getBankAccount(113))).toThrow( InsufficientFundsError, );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(113);
    expect(() => account.transfer(97, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(127);
    account.deposit(113);
    expect(account.getBalance()).toBe(240);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(127);
    account.withdraw(113);
    expect(account.getBalance()).toBe(14);
  });

  test('should transfer money', () => {
    const accountOne = getBankAccount(127);
    const accountTwo = getBankAccount(113);
    accountOne.transfer(97, accountTwo);
    expect(accountOne.getBalance()).toBe(30);
    expect(accountTwo.getBalance()).toBe(210);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(113);
    const balance = await account.fetchBalance();
    expect(typeof balance).toEqual('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(113);
    account.fetchBalance = async () => 97;
    await account.synchronizeBalance();
    expect(account.getBalance()).toEqual(97);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(113);
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(account.synchronizeBalance()).rejects.toThrow( SynchronizationFailedError, );
  });
});

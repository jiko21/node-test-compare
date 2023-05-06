const assert = require('node:assert/strict');
const { someFunc1 } = require('./mock');
const { mockFn } = require('./mockfn');

jest.mock('./mocked');
const mocked = require('./mocked');


describe('mock sample', () => {
  test('mock already existing object method', () => {
    mocked.fn.mockReturnValue(334);
    expect(someFunc1()).toBe(334);
    expect(mocked.fn).toHaveBeenCalledTimes(1);
  });
});

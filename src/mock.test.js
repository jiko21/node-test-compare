const { describe, test, mock } = require('node:test');
const assert = require('node:assert/strict');
const { someFunc1 } = require('./mock');
const { mockFn } = require('./mockfn');
const mocked = require('./mocked');

describe('mock sample', () => {
  test('mock already existing object method', () => {
    mock.method(mocked, 'fn', () => {
      return 334;
    });
    assert.deepEqual(someFunc1(), 334);
    assert.strictEqual(mocked.fn.mock.calls.length, 1);
  });
});

import {describe, test, mock} from 'node:test';
import assert from 'node:assert/strict';
import { someFunc1 } from './mock.mjs';
import { mockFn } from './mockfn.mjs';
import mocked from './mocked.mjs';

describe('mock sample', () => {
  test('mock already existing object method', () => {
    mock.method(mocked, 'fn', () => {
      return 334;
    });
    assert.deepEqual(someFunc1(), 334);
    assert.strictEqual(mocked.fn.mock.calls.length, 1);
  });
});

import { assert } from 'chai';
import generateColorHash from '../src';

describe('Color Hash Test', () => {
  it('should test color hash generation', () => {
    const expectedVal = '#541245';
    assert(generateColorHash({ str: 'Ashwanth A R' }) === expectedVal, 'color hash generation incorrect');
  });
});

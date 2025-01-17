import { describe, expect, test } from 'vitest';

describe('test tests', () => {
  test('test add', async () => {
    const a = 3;
    const b = 4;

    expect.hasAssertions();
    expect(a + b).toBe(7);
  });

  test.fails('Arrays should be equal', () => {
    expect([1, 2, 3]).toBe([1, 2, 3]);
  });
});

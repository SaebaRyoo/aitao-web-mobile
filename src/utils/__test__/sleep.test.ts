import { sleep } from '../sleep';

describe('sleep', () => {
  let oldTime = 0;
  beforeAll(() => {
    oldTime = Date.now();
  });
  it('wait 100ms before process the test', async () => {
    const test = jest.fn();
    await sleep(100);
    test();
    const now = Date.now();

    expect(now - oldTime >= 100).toBeTruthy();
    expect(test).toBeCalledTimes(1);
  });
});

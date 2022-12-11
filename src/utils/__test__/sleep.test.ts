import { sleep } from '../sleep';

describe('sleep', () => {
  let oldTime = 0;
  beforeAll(() => {
    oldTime = Date.now();
  });
  it('睡眠500ms再输出一个值', async () => {
    await sleep(500);
    const now = Date.now();

    expect(now - oldTime >= 500).toBeTruthy();
  });
});

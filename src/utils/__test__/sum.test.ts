import { sum } from '@/src/utils/sum';

// beforeAll(() => {
//   console.log('全局之前');
// });

// afterAll(() => {
//   console.log('全局之后');
// });

// beforeEach(() => {
//   console.log('全局之前，每个每个测试完成前都会执行');
// });

// afterEach(() => {
//   console.log('全局之后，每个每个测试完成后都会执行');
// });

describe('求和', () => {
  // beforeAll(() => {
  //   console.log('求和：全局之前');
  // });

  // afterAll(() => {
  //   console.log('求和：全局之后');
  // });

  // beforeEach(() => {
  //   console.log('求和：全局之前，每个每个测试完成前都会执行');
  // });

  // afterEach(() => {
  //   console.log('求和：全局之后，每个每个测试完成后都会执行');
  // });

  it('求和：1 + 2 = 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it('求和：2 + 5 = 7', () => {
    expect(sum(2, 5)).toEqual(7);
  });
});

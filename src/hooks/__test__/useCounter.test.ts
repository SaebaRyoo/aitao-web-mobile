import { act, renderHook } from '@testing-library/react';
import useCounter, { Options } from '../useCounter';

describe('useCounter', () => {
  const setUp = (init?: number, options?: Options) =>
    renderHook(() => useCounter(init, options));

  it('should init counter', () => {
    const { result } = setUp(100);
    const [current] = result.current;

    expect(current).toEqual(100);
  });

  it('should max, min, action works', () => {
    const { result } = setUp(20, { max: 10, min: 0 });
    const [current, { inc, dec, set, reset }] = result.current;

    expect(current).toEqual(10);

    act(() => inc(1));

    expect(result.current[0]).toEqual(10);

    act(() => dec(1000));

    expect(result.current[0]).toEqual(0);

    act(() => set(-100));
    expect(result.current[0]).toEqual(0);

    act(() => set(20));
    expect(result.current[0]).toEqual(10);

    act(() => reset());

    expect(result.current[0]).toEqual(10);
  });
});

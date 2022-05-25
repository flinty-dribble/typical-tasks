interface CurriedFunction2<T1, T2, T3, T4, T5, R> {
  (t1: T1, t2: T2): (t3: T3, t4: T4) => (t5: T5) => R;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
  (t1: T1): (t2: T2) => (t3: T3) => (t4: T4) => (t5: T5) => R;
}

export function curry<T1, T2, T3, T4, T5, R>(
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => R
): CurriedFunction2<T1, T2, T3, T4, T5, R>;
export function curry(func: (...argsOfFunc: number[]) => number) {
  return function curried(...args: number[]) {
    if (args.length >= func.length) {
      return func.apply(func, args);
    }
    return function curried2(...args2: number[]) {
      return curried.apply(func, args.concat(args2));
    };
  };
}

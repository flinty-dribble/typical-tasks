export function curry(func: Function) {
  return function curried(...args: number[]) {
    if (args.length >= func.length) {
      return func.apply(func, args);
    } else {
      return function (...args2: number[]) {
        return curried.apply(func, args.concat(args2));
      };
    }
  };
}

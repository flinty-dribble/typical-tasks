export function adder(...args: number[]) {
  let sum = 0;
  sum = args.length ? args[0] : 0;

  function f(a: number) {
    sum += a;
    return f;
  }

  f.toString = () => sum;

  return f;
}

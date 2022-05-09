export function adder(...args: number[]) {
  let sum = args.length ? args[0] : 0;

  function f(a: number) {
    sum += a;
    return f;
  }

  f.toString = () => {
    return sum;
  };

  return f;
}
if (typeof window !== "undefined") {
  console.log("You are on the browser");
  alert(adder());

  const s = adder();
  alert(s(1));
  alert(s(1)(2));
  alert(s(2)(3)(5));

  const s2 = adder(2);
  alert(s2(5));
  alert(s2(5)(2));
}

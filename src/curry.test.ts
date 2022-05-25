import { curry } from "./curry";

describe("curry", () => {
  it("curried sum", () => {
    function sum(a: number, b: number, c: number, d: number, e: number) {
      return a + b + c + d + e;
    }
    const hof = curry(sum);
    expect(hof(1, 2)(3, 4)(5)).toBe(15);
    expect(hof(1)(2)(3)(4)(6)).toBe(16);
    expect(hof(2, 3, 4, 5, 6)).toBe(20);
  });
});

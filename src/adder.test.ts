import { adder } from "./adder";

describe("adder", () => {
  it("work check", () => {
    expect(+adder()).toBe(0);

    let s = adder();

    expect(+s(1)).toBe(1);
    expect(+s(1)(2)).toBe(4);
    expect(+s(2)(3)(5)).toBe(14);

    const s3 = adder(2);

    expect(+s3(5)).toBe(7);
    expect(+s3(5)(2)).toBe(14);
  });
});

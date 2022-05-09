import { adder } from "./adder";

describe("adder", () => {
  it("work check", () => {
    if (typeof window !== "undefined") {
      jest.spyOn(window, "alert");

      adder();
      expect(window.alert).toHaveBeenCalledWith(0);

      const s = adder();

      s(1);
      expect(window.alert).toHaveBeenCalledWith(1);

      s(1)(2);
      expect(window.alert).toHaveBeenCalledWith(3);

      s(2)(3)(5);
      expect(window.alert).toHaveBeenCalledWith(10);

      const s3 = adder(2);

      s3(5);
      expect(window.alert).toHaveBeenCalledWith(7);

      s3(5)(2);
      expect(window.alert).toHaveBeenCalledWith(9);
    }
  });
});

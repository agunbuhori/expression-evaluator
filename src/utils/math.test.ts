import { dynamicOperation } from "./math";

describe("dynamic operation is working properly", () => {
  it("plus", () => {
    expect(dynamicOperation(1, 2, "+")).toEqual(3);
    expect(dynamicOperation(2, 4, "+")).toEqual(6);
    expect(dynamicOperation(-100, 4, "+")).toEqual(-96);
    expect(dynamicOperation(0.2, 0.1, "+")).toEqual(0.30000000000000004);
  });

  it("reduce", () => {
    expect(dynamicOperation(5432, 234, "-")).toEqual(5198);
    expect(dynamicOperation(2, 4, "-")).toEqual(-2);
  });

  it("multiply", () => {
    expect(dynamicOperation(2, 2, "*")).toEqual(4);
    expect(dynamicOperation(0.3, 0.2, "*")).toEqual(0.06);
  });

  it("divide", () => {
    expect(dynamicOperation(2, 2, "/")).toEqual(1);
    expect(dynamicOperation(10, 20, "/")).toEqual(0.5);
    expect(dynamicOperation(-10, 20, "/")).toEqual(-0.5);
  });
});

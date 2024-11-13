import Calculator from "./calculator";

describe("Calculator object test module", function () {
  test("Calculator is an IIFE", () => {
    const calc = typeof Calculator;
    expect(calc).toBe("object");
  });

  test("You can add two numbers using calculator", () => {
    expect(Calculator.add(10, 20)).toBe(30);
    expect(Calculator.add(-10, -10)).toBe(-20);
    expect(Calculator.add(10, -29)).toBe(-19);
  });

  test("You can only add two numbers", () => {
    expect(() => Calculator.add([], [])).toThrow(Error);
    expect(() => Calculator.add(3, [])).toThrow(Error);
    expect(() => Calculator.add([], 3)).toThrow(Error);
    expect(() => Calculator.add(3, "")).toThrow(Error);
    expect(() => Calculator.add("1", "2")).toThrow(Error);
    expect(() => Calculator.add(3, "1")).toThrow(Error);
    expect(() => Calculator.add("1", 3)).toThrow(Error);
    expect(() => Calculator.add(3, "1")).toThrow(Error);
    expect(() => Calculator.add(3, false)).toThrow(Error);
    expect(() => Calculator.add(true, 1)).toThrow(Error);
  });

  test("You can subtract two numbers using calculator", () => {
    expect(Calculator.sub(10, 20)).toBe(-10);
    expect(Calculator.sub(10, -10)).toBe(20);
  });

  test("You can only subtract two numbers", () => {
    expect(() => Calculator.sub([], [])).toThrow(Error);
    expect(() => Calculator.sub(3, [])).toThrow(Error);
    expect(() => Calculator.sub([], 3)).toThrow(Error);
    expect(() => Calculator.sub(3, "")).toThrow(Error);
    expect(() => Calculator.sub("1", "2")).toThrow(Error);
    expect(() => Calculator.sub(3, "1")).toThrow(Error);
    expect(() => Calculator.sub("1", 3)).toThrow(Error);
    expect(() => Calculator.sub(3, "1")).toThrow(Error);
    expect(() => Calculator.sub(3, false)).toThrow(Error);
    expect(() => Calculator.sub(true, 1)).toThrow(Error);
  });

  test("You can multiply two numbers using calculator", () => {
    expect(Calculator.mul(10, 20)).toBe(200);
    expect(Calculator.mul(-19, 10)).toBe(-190);
    expect(Calculator.mul(-10, -10)).toBe(100);
  });

  test("You can only multiply two numbers", () => {
    expect(() => Calculator.mul([], [])).toThrow(Error);
    expect(() => Calculator.mul(3, [])).toThrow(Error);
    expect(() => Calculator.mul([], 3)).toThrow(Error);
    expect(() => Calculator.mul(3, "")).toThrow(Error);
    expect(() => Calculator.mul("1", "2")).toThrow(Error);
    expect(() => Calculator.mul(3, "1")).toThrow(Error);
    expect(() => Calculator.mul("1", 3)).toThrow(Error);
    expect(() => Calculator.mul(3, "1")).toThrow(Error);
    expect(() => Calculator.mul(3, false)).toThrow(Error);
    expect(() => Calculator.mul(true, 1)).toThrow(Error);
  });

  test("You can divide two numbers using calculator", () => {
    expect(Calculator.div(10, 20)).toBe(0.5);
    expect(Calculator.div(-19, 10)).toBe(-1.9);
    expect(Calculator.div(-10, -10)).toBe(1);
  });

  test("You can not divide by zero", () => {
    expect(() => Calculator.div(10, 0)).toThrow(Error);
  });

  test("You can only divide two numbers", () => {
    expect(() => Calculator.div([], [])).toThrow(Error);
    expect(() => Calculator.div(3, [])).toThrow(Error);
    expect(() => Calculator.div([], 3)).toThrow(Error);
    expect(() => Calculator.div(3, "")).toThrow(Error);
    expect(() => Calculator.div("1", "2")).toThrow(Error);
    expect(() => Calculator.div(3, "1")).toThrow(Error);
    expect(() => Calculator.div("1", 3)).toThrow(Error);
    expect(() => Calculator.div(3, "1")).toThrow(Error);
    expect(() => Calculator.div(3, false)).toThrow(Error);
    expect(() => Calculator.div(true, 1)).toThrow(Error);
  });
});
